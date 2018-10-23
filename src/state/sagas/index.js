import { fork } from 'redux-saga/effects';
import { fetchDocumentWatcher } from './fetchDocument';


export default function* rootSaga () {
  // yield fork(<function>)
  yield fork(fetchDocumentWatcher);
}
