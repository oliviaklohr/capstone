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
  
} = actionTypes;

const initialState = {
  isFetching: false,
  // lastFetchStatus: -1, // UN-FETCHED
};

// TODO: remvoe before actually demoing the app or deploying to a server
const autoLoginInitialState = {
  isFetching: false,
  lastFetchStatus: 200,
  userId: 5,
  firstName: 'dylan',
  lastName: 'klohr',
  email: 'test1@gmail.com',
  dateCreated: '2018-11-26T01:53:01.906Z',
  isDeleted: false,
  password: 'password',
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
      
    case UPDATE_USER_PROPS:
      return {
        ...state,
        ...setUserIsFetching( false ),
        lastFetchStatus: actionContents.status,
        props: actionContents.props, // TODO: NOTE: this is NOT a permanent method for doing this, first we need to be `PUT`ing to the DB.
      };
    // TODO: after it is determined how to `PUT` to `user.props`, this can be uncommented and we can revert back to updating the store first
      // case UPDATE_USER_PROPS:
      //   return {
      //     ...state,
      //     ...setUserIsFetching( true ),
      //   };
      // case UPDATE_USER_PROPS_SUCCESS:
      //   return {
      //     ...state,
      //     ...setUserIsFetching( false ),
      //     ...setUserDetails( actionContents ),
      //     lastFetchStatus: actionContents.status,
      //   };
      // case UPDATE_USER_PROPS_FAILURE:
      //   return {
      //     ...state,
      //     ...setUserIsFetching( false ),
      //     lastFetchStatus: actionContents.status,
      //   };

    default:
      return state;
  }
};
