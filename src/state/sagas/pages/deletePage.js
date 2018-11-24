import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbPageToStorePage } from './helpers/transformDbPageToStorePage';
import Api from '../../api';


const {
  DELETE_PAGE,
} = actionTypes;

function* deletePage(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.deletePage, payload);
    const { status, data: responseData } = response;
    const data = responseData.row;
    switch (status) {
      case 200:
        yield put(actions.deletePage.success({
          status,
          ...transformDbPageToStorePage( data ),
        }));
        break;
      default:
        yield put(actions.deletePage.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('DELETE PAGE ERROR: ', error);
    yield put(actions.deletePage.failure({
      status: -1,
    }))
  }
}

export function* deletePageWatcher() {
  yield takeLatest(DELETE_PAGE, deletePage);
}
