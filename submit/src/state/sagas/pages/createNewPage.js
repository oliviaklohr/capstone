import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbPageToStorePage } from './helpers/transformDbPageToStorePage';
import Api from '../../api';


const {
  CREATE_NEW_PAGE,
} = actionTypes;

function* postNewPage(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.createNewPage, payload);

    const { status, data: responseData } = response;
    const data = responseData[0];
    switch (status) {
      case 200:
        yield put(actions.createNewPage.success({
          status,
          ...transformDbPageToStorePage( data ),
        }));
        break;
      default:
        yield put(actions.createNewPage.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('POST NEW PAGE ERROR: ', error);
    yield put(actions.createNewPage.failure({
      status: -1,
    }));
  }
}

export function* createNewPageWatcher() {
  yield takeLatest(CREATE_NEW_PAGE, postNewPage);
}
