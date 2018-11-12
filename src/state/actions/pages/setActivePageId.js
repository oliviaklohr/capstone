export const SET_ACTIVE_PAGE_ID = 'PAGES / SET ACTIVE PAGE ID';

const setActivePageId = ({
  pageId,
}) => ({
  type: SET_ACTIVE_PAGE_ID,
  pageId,
});

export { setActivePageId };
