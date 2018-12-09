import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';

import Api from '../../api';

const {
  UPDATE_USER_PROPS,
} = actionTypes;

function* updateUserProps(action) {
  const { type, ...payload } = action;

  try {
    const response = yield call(Api.updateUserProps, payload);

    const { status, data: responseData } = response;
  }
  catch(error) {
    console.log('POST UPDATE USER ERROR: ', error);
    yield put(actions.updateUser.failure({
      status: -1,
    }));
  }
}

export function* updateUserPropsWatcher() {
  yield takeLatest(UPDATE_USER_PROPS, updateUserProps);
}
