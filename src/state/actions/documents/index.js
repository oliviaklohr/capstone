import { createDocument, CREATE_DOCUMENT } from './createDocument';
import { saveDocument, SAVE_DOCUMENT } from './saveDocument';
import { changeOpenDocument, CHANGE_OPEN_DOCUMENT } from './changeOpenDocument';
import { closeOpenDocument, CLOSE_OPEN_DOCUMENT } from './closeOpenDocument';
import { fetchDocument, FETCH_DOCUMENT } from './fetchDocument';
import { receivedDocument, RECEIVED_DOCUMENT } from './receivedDocument';


export const documentsActions = {
  createDocument,
  saveDocument,
  changeOpenDocument,
  closeOpenDocument,
  fetchDocument,
  receivedDocument,
};

export const documentsActionTypes = {
  CREATE_DOCUMENT,
  SAVE_DOCUMENT,
  CHANGE_OPEN_DOCUMENT,
  CLOSE_OPEN_DOCUMENT,
  FETCH_DOCUMENT,
  RECEIVED_DOCUMENT,
};
