import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { transformDbPageToStorePage } from './helpers/transformDbPageToStorePage';
import Api from '../../api';

const {
  FETCH_PAGES_FOR_NOTEBOOK,
} = actionTypes;

function* fetchPagesForNotebook(action) {
  const { type, userId, notebookId } = action;

  try {
    let response = yield call(Api.fetchPagesForNotebook, { notebookid: notebookId });

    const { status, data } = response;

    if (status === 200 && data.length === 0) {
      yield put(actions.createNewPage({ userId, notebookId }));
    }
    else {
      switch (status) {
        case 200:
          yield put(actions.fetchPagesForNotebook.success({
            status,
            pages: data.map( transformDbPageToStorePage ),
          }));
          break;
        default:
          yield put(actions.fetchPagesForNotebook.failure({
            status,
          }));
          break;
      }
    }

  }
  catch (error) {
    console.log('FETCH PAGES FOR NOTEBOOK ERROR: ', error);
  }
}

export function* fetchPagesForNotebookWatcher() {
  yield takeLatest(FETCH_PAGES_FOR_NOTEBOOK, fetchPagesForNotebook)
}
