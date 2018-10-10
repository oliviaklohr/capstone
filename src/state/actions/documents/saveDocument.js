export const SAVE_DOCUMENT = 'DOCUMENTS / SAVE DOCUMENT';

export const saveDocument = ({ id = '', dataURL = '' } = {}) => ({
  type: SAVE_DOCUMENT,
  id,
  dataURL,
});
