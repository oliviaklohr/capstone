import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import Api from '../../../utils/api';

const {
  CREATE_NEW_USER,
} = actionTypes;

function* postNewUser(action) {
  const { type, ...payload } = action;
  
  try {
    const response = yield call(Api.createNewUser, payload);

    const { status, data: responseData } = response;
    const data = responseData[0];
    switch (status) {
      case 200:
// TODO: show success message about having successfully creating a user
// TODO: trigger redirect back to login page

        yield put(actions.createNewUser.success({
          status,
          userId: data.userid || 'FALLBACK: userId',
          firstName: data.firstname || 'FALLBACK: firstName',
          lastName: data.lastname || 'FALLBACK: lastName',
          email: data.email || 'FALLBACK: email',
          dateCreated: data.datecreated || 'FALLBACK: dateCreated',
          isActive: data.isactive || 'FALLBACK: isActive',
          password: data.props.password || 'FALLBACK: password',
        }));
        break;
      default:
        yield put(actions.createNewUser.failure({
          status,
        }));
        break;
    }
  }
  catch (error) {
    console.log('POST NEW USER ERROR: ', error);
  }
}

export function* createNewUserWatcher() {
  yield takeLatest(CREATE_NEW_USER, postNewUser);
}
