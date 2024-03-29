import {
  createNewNotebook,
  CREATE_NEW_NOTEBOOK,
  CREATE_NEW_NOTEBOOK_SUCCESS,
  CREATE_NEW_NOTEBOOK_FAILURE,
} from './createNewNotebook';

import {
  fetchNotebooksForUser,
  FETCH_NOTEBOOKS_FOR_USER,
  FETCH_NOTEBOOKS_FOR_USER_SUCCESS,
  FETCH_NOTEBOOKS_FOR_USER_FAILURE,
} from './fetchNotebooksForUser';

import {
  setActiveNotebookId,
  SET_ACTIVE_NOTEBOOK_ID,
} from './setActiveNotebookId';

import {
  deleteNotebook,
  DELETE_NOTEBOOK,
  DELETE_NOTEBOOK_SUCCESS,
  DELETE_NOTEBOOK_FAILURE,
} from './deleteNotebook';

export const notebooksActions = {
  createNewNotebook,
  fetchNotebooksForUser,
  setActiveNotebookId,
  deleteNotebook,
};

export const notebooksActionTypes = {
  CREATE_NEW_NOTEBOOK,
  CREATE_NEW_NOTEBOOK_SUCCESS,
  CREATE_NEW_NOTEBOOK_FAILURE,
  FETCH_NOTEBOOKS_FOR_USER,
  FETCH_NOTEBOOKS_FOR_USER_SUCCESS,
  FETCH_NOTEBOOKS_FOR_USER_FAILURE,
  SET_ACTIVE_NOTEBOOK_ID,
  DELETE_NOTEBOOK,
  DELETE_NOTEBOOK_SUCCESS,
  DELETE_NOTEBOOK_FAILURE,
};
