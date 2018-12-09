export const DELETE_PAGE = 'PAGES / DELETE';
export const DELETE_PAGE_SUCCESS = 'PAGES / DELETE SUCCESS';
export const DELETE_PAGE_FAILURE = 'PAGES / DELETE FAILURE';

const deletePage = ({
  pageId,
}) => ({
  type: DELETE_PAGE,
  pageId, 
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
  type: DELETE_PAGE_SUCCESS,
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
  type: DELETE_PAGE_FAILURE,
  status,
});

deletePage.success = success;
deletePage.failure = failure;

export { deletePage };
