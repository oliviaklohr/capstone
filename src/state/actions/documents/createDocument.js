import shortid from 'shortid'; // TODO: replace with real id generating logic
import moment from 'moment';

export const CREATE_DOCUMENT = 'DOCUMENTS / CREATE DOCUMENT';

export const createDocument = (dataURL = '') => {
  const created = moment().format();

  return {
    type: CREATE_DOCUMENT,
    id: `doc_${shortid.generate()}__${created}`,
    dataURL,
    created,
    lastModified: created,
  };
};
