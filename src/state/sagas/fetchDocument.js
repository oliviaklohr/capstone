import { takeLatest, put } from 'redux-saga/effects';
import { actionTypes } from '../actions';
import mockDrawing from '../../mock-data/mockDrawing';
import { actions } from '../actions';

const {
  FETCH_DOCUMENT,
} = actionTypes;

function mockFetchCall() {
  const promise = new Promise( (resolve, reject) => {
    window.setTimeout(() => {
      resolve(mockDrawing);
    }, 2000);
  });
  return promise;
}

function* fetchDocument() {
  const doc = yield mockFetchCall()
    .then(response => response);

  yield put(actions.receivedDocument({ doc }));
}

export function* fetchDocumentWatcher() {
  yield takeLatest(FETCH_DOCUMENT, fetchDocument);
}
