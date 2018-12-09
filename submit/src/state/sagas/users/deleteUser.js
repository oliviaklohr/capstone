import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbUserToStoreUser } from './helpers/transformDbUserToStoreUser';
import Api from '../../api';

const {
  DELETE_USER,
} = actionTypes;

function* deleteUser(action) {
  const { type, ...payload} = action;

  try {
    const response = yield call(Api.deleteUser, payload);
    const { status, data: responseData } = response;
    const data = responseData.row;
    switch (status) {
      case 200:
        yield put(actions.deleteUser.success({
          status,
          ...transformDbUserToStoreUser( data ),
        }))
        break;
      default:
        yield put(actions.deleteUser.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('DELETE USER ERROR: ', error);
    yield put(actions.deleteUSER.failure({
      status: -1,
    }))  
  }
}

export function* deleteUserWatcher() {
  yield takeLatest(DELETE_USER, deleteUser);
}
