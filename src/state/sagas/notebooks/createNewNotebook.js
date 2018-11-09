import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import Api from '../../../utils/api';

const {
  CREATE_NEW_NOTEBOOK,
} = actionTypes;

function* postNewNotebook(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.createNewNotebook, payload);

    const { status, data: responseData } = response;
    const data = responseData[0];
    switch (status) {
      case 200:
        yield put(actions.createNewNotebook.success({
          status,
          notebookId: data.notebookid,
          ownerId: data.ownerid,
          title: data.title,
          category: data.category || 'Uncategorized',
          isDeleted: data.isdeleted,
          dateCreated: data.datecreated,
          lastEdited: data.lastedited,
          color: data.props.color,
          isPublic: data.props.isPublic,
        }));
        break;
      default:
        yield put(actions.createNewNotebook.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('POST NEW NOTEBOOK ERROR: ', error);
  }
}

export function* createNewNotebookWatcher() {
  yield takeLatest(CREATE_NEW_NOTEBOOK, postNewNotebook);
}
