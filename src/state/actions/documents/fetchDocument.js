export const FETCH_DOCUMENT = 'DOCUMENTS / FETCH DOCUMENT';

export const fetchDocument = ({ id = ''} = {}) => ({
  type: FETCH_DOCUMENT,
  // id
});
