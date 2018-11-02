import { actionTypes } from '../../actions';
import { setNotebooksIsFetching } from './setNotebooksIsFetching';
import { setNotebookDetails } from './setNotebookDetails';


const {
  CREATE_NEW_NOTEBOOK,
  CREATE_NEW_NOTEBOOK_SUCCESS,
  CREATE_NEW_NOTEBOOK_FAILURE,
} = actionTypes;

const initialState = {
  isFetching: false,
  lastFetchStatus: -1, // UN-FETCHED
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
        }
      };
    case CREATE_NEW_NOTEBOOK_FAILURE:
      return {
        ...state,
        ...setNotebooksIsFetching( false ),
      };
    default:
      return state;
  }
};

