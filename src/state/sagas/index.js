import { fork } from 'redux-saga/effects';
import { createNewUserWatcher } from './users/createNewUser';
import { loginUserWatcher } from './users/loginUser';


export default function* rootSaga () {
  // yield fork(<function>)
  yield fork(createNewUserWatcher);
  yield fork(loginUserWatcher);
}
