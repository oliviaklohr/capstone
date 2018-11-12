import { fork } from 'redux-saga/effects';
import { createNewUserWatcher } from './users/createNewUser';
import { loginUserWatcher } from './users/loginUser';
import { createNewNotebookWatcher } from './notebooks/createNewNotebook';
import { fetchNotebooksForUserWatcher } from './notebooks/fetchNotebooksForUser';
import { createNewPageWatcher } from './pages/createNewPage';
import { fetchPagesForNotebookWatcher } from './pages/fetchPagesForNotebook';


export default function* rootSaga () {
  // yield fork(<function>)
  yield fork(createNewUserWatcher);
  yield fork(loginUserWatcher);
  yield fork(createNewNotebookWatcher);
  yield fork(fetchNotebooksForUserWatcher);
  yield fork(createNewPageWatcher);
  yield fork(fetchPagesForNotebookWatcher);
}
