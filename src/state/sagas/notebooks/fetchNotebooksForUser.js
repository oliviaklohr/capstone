import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbNbToStoreNb } from './helpers/transformDbNbToStoreNb';
import Api from '../../api';

const {
  FETCH_NOTEBOOKS_FOR_USER,
} = actionTypes;

function* fetchNotebooksForUser(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.fetchNotebooksForUser, payload);

    const { status, data } = response;
    switch (status) {
      case 200:
          yield put(actions.fetchNotebooksForUser.success({
            status,
            notebooks: data.map( transformDbNbToStoreNb ),
          }));
        break;
      default:
        yield put(actions.fetchNotebooksForUser.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('FETCH NOTEBOOKS FOR USER ERROR: ', error);
  }
}

export function* fetchNotebooksForUserWatcher() {
  yield takeLatest(FETCH_NOTEBOOKS_FOR_USER, fetchNotebooksForUser)
}
