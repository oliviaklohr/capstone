import { actionTypes } from '../../actions';
import { createDocument } from './createDocument';
import { saveDocument } from './saveDocument';
import { changeOpenDocument } from './changeOpenDocument';
import { closeDocument } from './closeDocument';
import { fetchDocument } from './fetchDocument';
import { receivedDocument } from './receivedDocument';

const {
  CREATE_DOCUMENT,
  CHANGE_OPEN_DOCUMENT,
  SAVE_DOCUMENT,
  CLOSE_OPEN_DOCUMENT,
  FETCH_DOCUMENT,
  RECEIVED_DOCUMENT
} = actionTypes;

const initialState = {};


// TODO: finish moving the `documentOpen` flag from `session` to `documents`
export const documents = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_DOCUMENT:
      return {
        ...state,
        ...createDocument(state, action),
        ...changeOpenDocument(state, action),
      };
    case SAVE_DOCUMENT:
      return {
        ...state,
        ...saveDocument(state, action)
      };
    case CHANGE_OPEN_DOCUMENT:
      return {
        ...state,
        ...changeOpenDocument(state, action)
      };
    case CLOSE_OPEN_DOCUMENT:
      return {
        ...state,
        ...closeDocument(state, action),
      };
    case FETCH_DOCUMENT:
      return {
        ...state,
        ...fetchDocument(state, action),
      };
    case RECEIVED_DOCUMENT:
      return {
        ...state,
        ...receivedDocument(state, action),
        ...changeOpenDocument(state, action),
      };
    default:
      return state;
  }
};
