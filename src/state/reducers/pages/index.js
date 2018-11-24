import { actionTypes } from '../../actions';
import { setPagesIsFetching } from './setPagesIsFetching';
import { setPageDetails } from './setPageDetails';
import { setActivePageId } from './setActivePageId';
import { savePageData } from './savePageData';
import { deletePageFromStore } from './deletePageFromStore';
import { repeatReducerForArray } from '../helpers/repeatReducerForArray';

const {
  CREATE_NEW_PAGE,
  CREATE_NEW_PAGE_SUCCESS,
  CREATE_NEW_PAGE_FAILURE,

  FETCH_PAGES_FOR_NOTEBOOK,
  FETCH_PAGES_FOR_NOTEBOOK_SUCCESS,
  FETCH_PAGES_FOR_NOTEBOOK_FAILURE,

  UPDATE_PAGE_DATA,
  UPDATE_PAGE_DATA_SUCCESS,
  UPDATE_PAGE_DATA_FAILURE,

  DELETE_PAGE,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_FAILURE,

  SET_ACTIVE_PAGE_ID,
  SAVE_PAGE_DATA,

  CLEAR_PAGES,
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
        byPageId: {
          ...state.byPageId,
          ...setPageDetails( actionContents ),
        },
        lastFetchStatus: actionContents.status,
      };
    case CREATE_NEW_PAGE_FAILURE:
      return {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
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
        byPageId: {
          ...repeatReducerForArray(setPageDetails, actionContents.pages),
        },
        lastFetchStatus: actionContents.status,
      };
    case FETCH_PAGES_FOR_NOTEBOOK_FAILURE:
      return {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };


    case UPDATE_PAGE_DATA:
      return {
        ...state,
        ...setPagesIsFetching( true ),
      };
    case UPDATE_PAGE_DATA_SUCCESS:
      debugger;
      return {
        ...state,
        ...setPagesIsFetching( false ),
        byPageId: {
          ...state.byPageId,
        },
        lastFetchStatus: actionContents.status,
      };
    case UPDATE_PAGE_DATA_FAILURE:
      return {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
      };


    case DELETE_PAGE:
      return {
        ...state,
        ...setPagesIsFetching( true ),
      };
    case DELETE_PAGE_SUCCESS:
      const returnObj = {
        ...state,
        ...setPagesIsFetching( false ),
        lastFetchStatus: actionContents.status,
        byPageId: {
          ...deletePageFromStore( state.byPageId, actionContents ),
        },
      };

      return returnObj;
    case DELETE_PAGE_FAILURE:
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


    case CLEAR_PAGES:
      return {
        ...state,
        byPageId: {},
      };
    default:
      return state;
  }
};
