import {
  createNewUser,
  CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILURE,
} from './createNewUser';

import {
  loginUser,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from './loginUser';

import {
  updateUserProps,
  UPDATE_USER_PROPS,
  UPDATE_USER_PROPS_SUCCESS,
  UPDATE_USER_PROPS_FAILURE,
} from './updateUserProps';

export const userActions = {
  createNewUser,
  loginUser,
  updateUserProps,
};

export const userActionTypes = {
  CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILURE,
  
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  
  UPDATE_USER_PROPS,
  UPDATE_USER_PROPS_SUCCESS,
  UPDATE_USER_PROPS_FAILURE,
};
