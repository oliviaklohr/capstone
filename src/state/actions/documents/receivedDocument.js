export const RECEIVED_DOCUMENT = 'DOCUMENTS / RECEIVED DOCUMENT';

export const receivedDocument = ({ doc = {}} = {}) => ({
  type: RECEIVED_DOCUMENT,
  ...doc,
});

