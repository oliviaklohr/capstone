export const deletePageFromStore = (prevByPageId, { pageId }) => {

  const keyToRemove = pageId.toString();
  const {
    [keyToRemove]: _omit,
    ...byPageId
  } = prevByPageId;

  return byPageId;
};
