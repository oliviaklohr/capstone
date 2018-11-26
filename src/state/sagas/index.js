import { fork } from 'redux-saga/effects';
import { createNewUserWatcher } from './users/createNewUser';
import { loginUserWatcher } from './users/loginUser';
import { updateUserPropsWatcher } from './users/updateUserProps';
import { createNewNotebookWatcher } from './notebooks/createNewNotebook';
import { fetchNotebooksForUserWatcher } from './notebooks/fetchNotebooksForUser';
import { createNewPageWatcher } from './pages/createNewPage';
import { fetchPagesForNotebookWatcher } from './pages/fetchPagesForNotebook';
import { updatePageWatcher } from './pages/updatePage';
import { deletePageWatcher } from './pages/deletePage';
import { deleteNotebookWatcher } from './notebooks/deleteNotebook';


export default function* rootSaga () {
  yield fork(createNewUserWatcher);
  yield fork(loginUserWatcher);
  // yield fork(updateUserPropsWatcher); // TODO: after I figure out how to `PUT` to `user.props`, the implementation on this can be finished
  yield fork(createNewNotebookWatcher);
  yield fork(fetchNotebooksForUserWatcher);
  yield fork(createNewPageWatcher);
  yield fork(fetchPagesForNotebookWatcher);
  yield fork(updatePageWatcher);
  yield fork(deletePageWatcher);
  yield fork(deleteNotebookWatcher);
}
