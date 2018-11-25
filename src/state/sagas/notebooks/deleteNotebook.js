import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbNbToStoreNb } from './helpers/transformDbNbToStoreNb';
import Api from '../../api';


const {
  DELETE_NOTEBOOK,
} = actionTypes;

function* deleteNotebook(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.deleteNotebook, payload);
    const { status, data: responseData } = response;
    const data = responseData.row;

    debugger;
    switch (status) {
      case 200:
        yield put(actions.deleteNotebook.success({
          status,
          ...transformDbNbToStoreNb( data ),
        }));
        break;
      default:
        yield put(actions.deleteNotebook.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('DELETE NOTEBOOK ERROR: ', error);
    yield put(actions.deleteNotebook.failure({
      status: -1,
    }))
  }
}

export function* deleteNotebookWatcher() {
  yield takeLatest(DELETE_NOTEBOOK, deleteNotebook);
}
