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

      yield put(actions.loginUser.failure({
        status: -1,
      }));
      return;
    }

    const data = responseData[0];
    switch (status) {
      case 200:
        if (action.password !== data.props.password) {
          yield put(actions.loginUser.failure({
            status: -1,
          }));
        }
        else {
          yield put(actions.loginUser.success({
            status,
            ...transformDbUserToStoreUser( data ),
          }));
        } 
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
