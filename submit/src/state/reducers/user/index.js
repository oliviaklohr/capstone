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
  
  UPDATE_USER_PROPS,
  UPDATE_USER_PROPS_SUCCESS,
  UPDATE_USER_PROPS_FAILURE,
  
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,

  LOGOUT_USER,
} = actionTypes;

const initialState = {
  isFetching: false,
};

const autoLoginInitialState = {
  isFetching: false,
  lastFetchStatus: 200,
  userId: 15,
  firstName: '234',
  lastName: '234',
  email: '23456',
  dateCreated: '2018-11-29T04:18:50.549Z',
  isDeleted: false,
  password: '23456',
  props: {
    penColors: [
      'rgba(0, 0, 0, 1)',
      'rgba(97, 97, 97, 1)',
      'rgba(189, 189, 189, 1)',
      'rgba(213, 0, 0, 1)',
      'rgba(237, 96, 3, 1)',
      'rgba(252, 164, 32, 1)',
      'rgba(255, 253, 56, 1)',
      'rgba(171, 253, 57, 1)',
      'rgba(99, 184, 77, 1)',
      'rgba(13, 114, 61, 1)',
      'rgba(20, 116, 251, 1)',
      'rgba(28, 76, 189, 1)',
      'rgba(19, 13, 116, 1)',
      'rgba(96, 29, 148, 1)',
      'rgba(172, 17, 199, 1)',
      'rgba(255, 21, 220, 1)'
    ],
    activeTool: 'pen',
    penLineWidth: 3,
    activePenColor: 'rgba(0, 0, 0, 1)',
    highlighterColors: [
      'rgba(0, 0, 0, 0.5)',
      'rgba(97, 97, 97, 0.5)',
      'rgba(189, 189, 189, 0.5)',
      'rgba(213, 0, 0, 0.5)',
      'rgba(237, 96, 3, 0.5)',
      'rgba(252, 164, 32, 0.5)',
      'rgba(255, 253, 56, 0.5)',
      'rgba(171, 253, 57, 0.5)',
      'rgba(99, 184, 77, 0.5)',
      'rgba(13, 114, 61, 0.5)',
      'rgba(20, 116, 251, 0.5)',
      'rgba(28, 76, 189, 0.5)',
      'rgba(19, 13, 116, 0.5)',
      'rgba(96, 29, 148, 0.5)',
      'rgba(172, 17, 199, 0.5)',
      'rgba(255, 21, 220, 0.5)'
    ],
    highlighterLineWidth: 10,
    activeHighlighterColor: 'rgba(0, 0, 0, 0.5)'
  }
};

const autoLogin = false;

export const user = (state = autoLogin ? autoLoginInitialState: initialState, action = {}) => {
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
        lastFetchStatus: actionContents.status,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        ...setUserIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };


    case DELETE_USER:
      return {
        ...state,
        ...setUserIsFetching( true ),
      };
    case DELETE_USER_SUCCESS:
      return {
        ...setUserIsFetching( false ),
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        ...setUserIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };

    case LOGOUT_USER:
      return  {
        isFetching: false,
      };
      
    case UPDATE_USER_PROPS:
      return {
        ...state,
        ...setUserIsFetching( false ),
        props: actionContents.props,
      };

    default:
      return state;
  }
};
