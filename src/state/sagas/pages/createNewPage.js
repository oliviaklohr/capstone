import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import Api from '../../../utils/api';

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
          pageId: data.pageid,
          notebookId: data.notebookid,
          ownerId: data.ownerid,
          canvasImg: data.canvasimg,
          isDeleted: data.isdeleted,
          dateCreated: data.datecreated,
          lastEdited: data.lastedited,
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
  }
}

export function* createNewPageWatcher() {
  yield takeLatest(CREATE_NEW_PAGE, postNewPage);
}
