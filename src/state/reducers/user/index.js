import { actionTypes } from '../../actions';
import { setUserIsFetching } from './setUserIsFetching';
import { setUserDetails } from './setUserDetails';

const {
  CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
} = actionTypes;

const initialState = {
  isFetching: false,
  lastFetchStatus: -1, // UN-FETCHED
};

export const user = (state = initialState, action = {}) => {
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
    default:
      return state;
  }
};
