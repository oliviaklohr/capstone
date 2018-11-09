import { actionTypes } from '../../actions';
import { setPagesIsFetching } from './setPagesIsFetching';
import { setPageDetails } from './setPageDetails';

const {
  CREATE_NEW_PAGE,
  CREATE_NEW_PAGE_SUCCESS,
  CREATE_NEW_PAGE_FAILURE,
} = actionTypes;

const initialState = {
  isFetching: false,
  lastFetchStatus: -1, // UN-FETCHED
  byPagesId: {},
};

export const pages = (state = initialState, action = {}) => {
  const { type, ...actionContents } = action;

  switch (type) {
    case CREATE_NEW_PAGE:
      return {
        ...state,
        ...setPagesIsFetching( true ),
      };
    case CREATE_NEW_PAGE_SUCCESS:
      return {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
        byPagesId: {
          ...state.byPagesId,
          ...setPageDetails( actionContents ),
        }
      };
    case CREATE_NEW_PAGE_FAILURE:
      return {
        ...state,
        ...setPagesIsFetching( false ),
      };
    default:
      return state;
  }
};
