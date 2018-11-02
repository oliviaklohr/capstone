import { userActions, userActionTypes } from './user';
import { notebooksActions, notebooksActionTypes } from './notebooks';
import { pagesActions, pagesActionTypes } from './pages';

export const actions = {
  ...userActions,
  ...notebooksActions,
  ...pagesActions,
};

export const actionTypes = {
  ...userActionTypes,
  ...notebooksActionTypes,
  ...pagesActionTypes,
};
