export const CREATE_NEW_NOTEBOOK = 'NOTEBOOKS / CREATE NEW';
export const CREATE_NEW_NOTEBOOK_SUCCESS = 'NOTEBOOKS / CREATE NEW SUCCESS';
export const CREATE_NEW_NOTEBOOK_FAILURE = 'NOTEBOOKS / CREATE NEW FAILURE';

// TODO: ensure that we're sending a REAL user-id

const createNewNotebook = ({
  userId,
  title,
  category,
  color,
  isPublic,
  ...others,
}) => ({
  type: CREATE_NEW_NOTEBOOK,
  ownerid: userId,
  title,
  category,
  props: {
    ...others,
    color,
    isPublic,
  },
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
  type: CREATE_NEW_NOTEBOOK_SUCCESS,
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
  type: CREATE_NEW_NOTEBOOK_FAILURE,
  lastFetchStatus: status,
});

createNewNotebook.success = success;
createNewNotebook.failure = failure;

export { createNewNotebook };
