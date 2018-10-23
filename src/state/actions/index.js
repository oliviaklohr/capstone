import { documentsActions, documentsActionTypes } from './documents';
import { usersActions, usersActionTypes } from './users';
import { sessionActions, sessionActionTypes } from './session';

export const actions = {
  ...documentsActions,
  ...usersActions,
  ...sessionActions,
};

export const actionTypes = {
  ...documentsActionTypes,
  ...usersActionTypes,
  ...sessionActionTypes
};
