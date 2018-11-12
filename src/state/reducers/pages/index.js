import { actionTypes } from '../../actions';
import { setPagesIsFetching } from './setPagesIsFetching';
import { setPageDetails } from './setPageDetails';
import { setActivePageId } from './setActivePageId';
import { savePageData } from './savePageData';
import { repeatReducerForArray } from '../_helpers/repeatReducerForArray';

const {
  CREATE_NEW_PAGE,
  CREATE_NEW_PAGE_SUCCESS,
  CREATE_NEW_PAGE_FAILURE,
  FETCH_PAGES_FOR_NOTEBOOK,
  FETCH_PAGES_FOR_NOTEBOOK_SUCCESS,
  FETCH_PAGES_FOR_NOTEBOOK_FAILURE,
  SET_ACTIVE_PAGE_ID,
  SAVE_PAGE_DATA,
} = actionTypes;

const initialState = {
  isFetching: false,
  // lastFetchStatus: -1, // UN-FETCHED
  byPageId: {},
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
        byPageId: {
          ...state.byPageId,
          ...setPageDetails( actionContents ),
        }
      };
    case CREATE_NEW_PAGE_FAILURE:
      return {
        ...state,
        ...setPagesIsFetching( false ),
      };


    case FETCH_PAGES_FOR_NOTEBOOK:
      return {
        ...state,
        ...setPagesIsFetching( true ),
      };
    case FETCH_PAGES_FOR_NOTEBOOK_SUCCESS:
      return {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
        byPageId: {
          // ...state.byPagesId, // TODO: determine if this is really necessary
          ...repeatReducerForArray(setPageDetails, actionContents.pages),
        },
      };
    case FETCH_PAGES_FOR_NOTEBOOK_FAILURE:
      return {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };


    case SET_ACTIVE_PAGE_ID:
      return {
        ...state,
        ...setActivePageId( actionContents ),
      };

    case SAVE_PAGE_DATA:
      return {
        ...state,
        byPageId: {
          ...state.byPageId,
          ...savePageData(state, actionContents),
        },
      };
    default:
      return state;
  }
};
