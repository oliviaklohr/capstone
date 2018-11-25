export const deleteNotebookFromStore = (prevByNotebookId, { notebookId }) => {

  const keyToRemove = notebookId.toString();
  const {
    [keyToRemove]: _omit,
    ...byNotebookId
  } = prevByNotebookId;

  return byNotebookId;
};
