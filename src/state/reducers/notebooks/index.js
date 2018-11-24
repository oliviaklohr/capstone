import { actionTypes } from '../../actions';
import { setNotebooksIsFetching } from './setNotebooksIsFetching';
import { setNotebookDetails } from './setNotebookDetails';
import { setActiveNotebookId } from './setActiveNotebookId';
import { repeatReducerForArray } from '../helpers/repeatReducerForArray';


const {
  CREATE_NEW_NOTEBOOK,
  CREATE_NEW_NOTEBOOK_SUCCESS,
  CREATE_NEW_NOTEBOOK_FAILURE,
  FETCH_NOTEBOOKS_FOR_USER,
  FETCH_NOTEBOOKS_FOR_USER_SUCCESS,
  FETCH_NOTEBOOKS_FOR_USER_FAILURE,
  SET_ACTIVE_NOTEBOOK_ID,
} = actionTypes;

const initialState = {
  isFetching: false,
  // activeNotebookId: -1, // INACTIVE
  // lastFetchStatus: -1, // UN-FETCHED
  byNotebookId: {},
};

export const notebooks = (state = initialState, action = {}) => {
  const { type, ...actionContents } = action;
  
  switch (type) {
    case CREATE_NEW_NOTEBOOK:
      return {
        ...state,
        ...setNotebooksIsFetching( true ),
      };
    case CREATE_NEW_NOTEBOOK_SUCCESS:
      return {
        ...state,
        ...setNotebooksIsFetching( false ),
        lastFetchStatus: actionContents.status,
        byNotebookId: {
          ...state.byNotebookId,
          ...setNotebookDetails( actionContents ),
        },
      };
    case CREATE_NEW_NOTEBOOK_FAILURE:
      return {
        ...state,
        ...setNotebooksIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };


    case FETCH_NOTEBOOKS_FOR_USER:
      return {
        ...state,
        ...setNotebooksIsFetching( true ),
      };
    case FETCH_NOTEBOOKS_FOR_USER_SUCCESS:
      return {
        ...state,
        ...setNotebooksIsFetching( false ),
        lastFetchStatus: actionContents.status,
        byNotebookId: {
          ...state.byNotebookId,
          ...repeatReducerForArray(setNotebookDetails, actionContents.notebooks),
        },
      };
    case FETCH_NOTEBOOKS_FOR_USER_FAILURE:
      return {
        ...state,
        ...setNotebooksIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };


    case SET_ACTIVE_NOTEBOOK_ID:
      return {
        ...state,
        ...setActiveNotebookId( actionContents ),
      };
    default:
      return state;
  }
};

