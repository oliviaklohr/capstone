import moment from 'moment';

export const UPDATE_PAGE_DATA = 'PAGES / UPDATE PAGE DATA';
export const UPDATE_PAGE_DATA_SUCCESS = 'PAGES / UPDATE PAGE DATA SUCCESS';
export const UPDATE_PAGE_DATA_FAILURE = 'PAGES / UPDATE PAGE DATA FAILURE';

const updatePageData = ({
  pageId,
  ...pageData,
}) => ({
  type: UPDATE_PAGE_DATA,
  pageId,
  ...pageData,
  lastEdited: moment().format(),
});

const success = ({
  status,
  pageId,
  notebookId,
  ownerId,
  canvasImg,
  isDeleted,
  dateCreated,
  lastEdited,
}) => ({
  type: UPDATE_PAGE_DATA_SUCCESS,
  status,
  pageId,
  notebookId,
  ownerId,
  canvasImg,
  isDeleted,
  dateCreated,
  lastEdited,
});

const failure = ({ status }) => ({
  type: UPDATE_PAGE_DATA_FAILURE,
  lastFetchStatus: status,
});

updatePageData.success = success;
updatePageData.failure = failure;

export { updatePageData };

