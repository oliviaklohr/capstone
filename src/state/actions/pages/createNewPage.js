export const CREATE_NEW_PAGE = 'PAGES / CREATE NEW';
export const CREATE_NEW_PAGE_SUCCESS = 'PAGES / CREATE NEW SUCCESS';
export const CREATE_NEW_PAGE_FAILURE = 'PAGES / CREATE NEW FAILURE';

// TODO: ensure that we're sending a REAL user-id
const createNewPage = ({
  userId,
  notebookId,
}) => ({
  type: CREATE_NEW_PAGE,
  ownerid: userId,
  notebookid: notebookId,
  canvasimg: null,
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
  type: CREATE_NEW_PAGE_SUCCESS,
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
  type: CREATE_NEW_PAGE_FAILURE,
  lastFetchStatus: status,
});

createNewPage.success = success;
createNewPage.failure = failure;

export { createNewPage };
