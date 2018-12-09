export const FETCH_NOTEBOOKS_FOR_USER = 'NOTEBOOKS / FETCH NOTEBOOKS FOR USER';
export const FETCH_NOTEBOOKS_FOR_USER_SUCCESS = 'NOTEBOOKS / FETCH NOTEBOOKS FOR USER SUCCESS';
export const FETCH_NOTEBOOKS_FOR_USER_FAILURE = 'NOTEBOOKS / FETCH NOTEBOOKS FOR USER FAILURE';

const fetchNotebooksForUser = ({
  userId,
}) => ({
  type: FETCH_NOTEBOOKS_FOR_USER,
  ownderid: userId,
});


const success = ({
  status,
  notebooks,
}) => ({
  type: FETCH_NOTEBOOKS_FOR_USER_SUCCESS,
  status,
  notebooks,
});

const failure = ({ status }) => ({
  type: FETCH_NOTEBOOKS_FOR_USER_FAILURE,
  status,
});

fetchNotebooksForUser.success = success;
fetchNotebooksForUser.failure = failure;

export { fetchNotebooksForUser };

