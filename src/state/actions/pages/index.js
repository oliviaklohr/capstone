import {
  createNewPage,
  CREATE_NEW_PAGE,
  CREATE_NEW_PAGE_SUCCESS,
  CREATE_NEW_PAGE_FAILURE,
} from './createNewPage';

import {
  fetchPagesForNotebook,
  FETCH_PAGES_FOR_NOTEBOOK,
  FETCH_PAGES_FOR_NOTEBOOK_SUCCESS,
  FETCH_PAGES_FOR_NOTEBOOK_FAILURE,
} from './fetchPagesForNotebook';

import {
  setActivePageId,
  SET_ACTIVE_PAGE_ID,
} from './setActivePageId';

import {
  savePageData,
  SAVE_PAGE_DATA,
} from './savePageData';

import {
  updatePageData,
  UPDATE_PAGE_DATA,
  UPDATE_PAGE_DATA_SUCCESS,
  UPDATE_PAGE_DATA_FAILURE,
} from './updatePageData';

import {
  deletePage,
  DELETE_PAGE,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_FAILURE,
} from './deletePage';

import {
  clearPages,
  CLEAR_PAGES
} from './clearPages';

export const pagesActions = {
  createNewPage,
  fetchPagesForNotebook,
  setActivePageId,
  savePageData,
  updatePageData,
  deletePage,
  clearPages,
};

export const pagesActionTypes = {
  CREATE_NEW_PAGE,
  CREATE_NEW_PAGE_SUCCESS,
  CREATE_NEW_PAGE_FAILURE,
  FETCH_PAGES_FOR_NOTEBOOK,
  FETCH_PAGES_FOR_NOTEBOOK_SUCCESS,
  FETCH_PAGES_FOR_NOTEBOOK_FAILURE,
  SET_ACTIVE_PAGE_ID,
  SAVE_PAGE_DATA,
  UPDATE_PAGE_DATA,
  UPDATE_PAGE_DATA_SUCCESS,
  UPDATE_PAGE_DATA_FAILURE,
  DELETE_PAGE,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_FAILURE,
  CLEAR_PAGES,
};
