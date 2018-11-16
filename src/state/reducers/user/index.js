import { actionTypes } from '../../actions';
import { setUserIsFetching } from './setUserIsFetching';
import { setUserDetails } from './setUserDetails';

const {
  CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} = actionTypes;

const initialState = {
  isFetching: false,
  // lastFetchStatus: -1, // UN-FETCHED
};

// TODO: remvoe before aftually demoing the app or deploying to a server
const autoLoginInitialState = {
  isFetching: false,
  lastFetchStatus: 200,
  userId: 1,
  firstName: "dylan",
  lastName: "klohr",
  email: "dylan.klohr@gmail.com",
  dateCreated: "2018-10-30T13:19:55.201Z",
  isDeleted: false,
  password: "password",
};

export const user = (state = autoLoginInitialState, action = {}) => {
  const { type, ...actionContents } = action;

  switch (type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        ...setUserIsFetching( true ),
      };
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        ...setUserIsFetching( false ),
        ...setUserDetails( actionContents ),
      };
    case CREATE_NEW_USER_FAILURE:
      return {
        ...state,
        ...setUserIsFetching( false ),
      };
    case LOGIN_USER:
      return {
        ...state,
        ...setUserIsFetching( true ),
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...setUserIsFetching( false ),
        ...setUserDetails( actionContents ),
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        ...setUserIsFetching( false ),
      };
    default:
      return state;
  }
};
