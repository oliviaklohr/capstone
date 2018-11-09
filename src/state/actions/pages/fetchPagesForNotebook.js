export const FETCH_PAGES_FOR_NOTEBOOK = 'PAGES / FETCH PAGES FOR NOTEBOOK';
export const FETCH_PAGES_FOR_NOTEBOOK_SUCCESS = 'PAGES / FETCH PAGES FOR NOTEBOOK SUCCESS';
export const FETCH_PAGES_FOR_NOTEBOOK_FAILURE = 'PAGES / FETCH PAGES FOR NOTEBOOK FAILURE';

const fetchPagesForNotebook = ({
  notebookId,
  userId,
}) => ({
  type: FETCH_PAGES_FOR_NOTEBOOK,
  notebookId,
  userId,
});


const success = ({
  status,
  pages,
}) => ({
  type: FETCH_PAGES_FOR_NOTEBOOK_SUCCESS,
  status,
  pages,
});

const failure = ({ status }) => ({
  type: FETCH_PAGES_FOR_NOTEBOOK_FAILURE,
  status,
});

fetchPagesForNotebook.success = success;
fetchPagesForNotebook.failure = failure;

export { fetchPagesForNotebook };

