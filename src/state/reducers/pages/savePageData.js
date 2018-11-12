export const savePageData = (state, { pageId, lastEdited, pageData }) => ({
  [pageId]: {
    ...state.byPageId[pageId],
    lastEdited,
    canvasImg: pageData,
  },
});
