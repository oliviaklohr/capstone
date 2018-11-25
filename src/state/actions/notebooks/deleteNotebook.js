export const DELETE_NOTEBOOK = 'NOTEBOOKS / DELETE';
export const DELETE_NOTEBOOK_SUCCESS = 'NOTEBOOKS / DELETE SUCCESS';
export const DELETE_NOTEBOOK_FAILURE = 'NOTEBOOKS / DELETE FAILURE';

const deleteNotebook = ({
  notebookId,
}) => ({
  type: DELETE_NOTEBOOK,
  notebookId, 
});

const success = ({
  status,
  notebookId,
  ownerId,
  title,
  category,
  isDeleted,
  dateCreated,
  lastEdited,
  color,
  isPublic,
}) => ({
  type: DELETE_NOTEBOOK_SUCCESS,
  status,
  notebookId,
  ownerId,
  title,
  category,
  isDeleted,
  dateCreated,
  lastEdited,
  color,
  isPublic,
});

const failure = ({ status }) => ({
  type: DELETE_NOTEBOOK_FAILURE,
  status,
});

deleteNotebook.success = success;
deleteNotebook.failure = failure;

export { deleteNotebook };
