import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbNbToStoreNb } from './helpers/transformDbNbToStoreNb';
import Api from '../../api';

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
          ...transformDbNbToStoreNb( data ),
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
