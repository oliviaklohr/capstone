export const deletePageFromStore = (prevByPageId, { pageId }) => {
  const {
    [pageId]: _omit,
    ...byPageId
  } = prevByPageId;

  return byPageId;
};
