export const LOGIN_USER = 'USER / LOGIN';
export const LOGIN_USER_SUCCESS = 'USER / LOGIN SUCCESS';
export const LOGIN_USER_FAILURE = 'USER / LOGIN FAILURE';

const loginUser = ({
  email = '',
  password = '',
}) => ({
  type: LOGIN_USER,
  email,
  password,
});

const success = ({
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isDeleted,
  password,
  props,
}) => ({
  type: LOGIN_USER_SUCCESS,
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isDeleted,
  password,
  props,
});

const failure = ({ status }) => ({
  type: LOGIN_USER_FAILURE,
  lastFetchStatus: status,
});

loginUser.success = success;
loginUser.failure = failure;

export { loginUser };
