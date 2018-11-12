import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import Api from '../../api';

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
        yield put(actions.createNewUser.success({
          status,
          userId: data.userid,
          firstName: data.firstname,
          lastName: data.lastname,
          email: data.email,
          dateCreated: data.datecreated,
          isDeleted: data.isdeleted,
          password: data.props.password,
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
    yield put(actions.createNewUser.failure({
      status: -1,
    }));
  }
}

export function* createNewUserWatcher() {
  yield takeLatest(CREATE_NEW_USER, postNewUser);
}
