import moment from 'moment';

export const SAVE_PAGE_DATA = 'PAGES / SAVE PAGE DATA';

const savePageData = ({
  pageId,
  pageData,
}) => ({
  type: SAVE_PAGE_DATA,
  pageId,
  pageData,
  lastEdited: moment().format(),
});

export { savePageData };

