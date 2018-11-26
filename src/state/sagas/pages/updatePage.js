import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbPageToStorePage } from './helpers/transformDbPageToStorePage';
import { transformStorePageToDbPage } from './helpers/transformStorePageToDbPage';

import Api from '../../api';


const {
  UPDATE_PAGE_DATA,
} = actionTypes;

function* updatePage(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.updatePage, transformStorePageToDbPage( payload ));

    const { status, data: responseData } = response;
    const data = responseData[0];
    switch (status) {
      case 200:
        yield put(actions.updatePageData.success({
          status,
          ...transformDbPageToStorePage( data ),
        }));
        break;
      default:
        yield put(actions.updatePageData.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('POST UPDATE PAGE ERROR: ', error);
    yield put(actions.updatePageData.failure({
      status: -1,
    }));
  }
}

export function* updatePageWatcher() {
  yield takeLatest(UPDATE_PAGE_DATA, updatePage);
}
