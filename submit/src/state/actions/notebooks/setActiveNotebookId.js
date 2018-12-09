export const SET_ACTIVE_NOTEBOOK_ID = 'NOTEBOOKS / SET ACTIVE NOTEBOOK ID';

const setActiveNotebookId = ({
  notebookId,
}) => ({
  type: SET_ACTIVE_NOTEBOOK_ID,
  notebookId,
});

export { setActiveNotebookId };
