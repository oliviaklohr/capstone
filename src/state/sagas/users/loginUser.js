import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbUserToStoreUser } from './helpers/transformDbUserToStoreUser';
import Api from '../../api';

const {
  LOGIN_USER,
} = actionTypes;

function* getUserByEmail(action) {
  const { type, password, ...payload} = action;

  try {
    const response = yield call(Api.loginUser, payload);

    const { status, data: responseData } = response;

    if ( !response.data.length ) {
      console.log('LOGIN USER ERROR: no user found by that email');
      return;
    }

    const data = responseData[0];
    switch (status) {
      case 200:
        // TODO: ensure that noah is able to fix the database such that we will ONLY receive a 200 error if we have a user that is getting returned
        const actionToDispatch = actions.loginUser.success({
          status,
          ...transformDbUserToStoreUser( data ),
        });
        
        yield put(actionToDispatch);
        break;
      default:
        yield put(actions.loginUser.failure({
          status
        }));
        break;
      }
    }
    catch (error) {
      console.log('POST LOGIN USER ERROR: ', error);
      yield put(actions.loginUser.failure({
        status: -1,
      }));
  }
}

export function* loginUserWatcher() {
  yield takeLatest(LOGIN_USER, getUserByEmail);
}
