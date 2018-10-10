export const CHANGE_OPEN_DOCUMENT = 'DOCUMENTS / CHANGE OPEN DOCUMENT';

export const changeOpenDocument = ({ documentId = ''} = {}) => ({
  type: CHANGE_OPEN_DOCUMENT,
  id: documentId,
});
