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

import {
  deleteUser,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from './deleteUser';

import {
  logoutUser,
  LOGOUT_USER,
} from './logoutUser';

export const userActions = {
  createNewUser,
  loginUser,
  updateUserProps,
  deleteUser,
  logoutUser,
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
  
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  
  LOGOUT_USER,
};
