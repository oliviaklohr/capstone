import moment from 'moment';

export const saveDocument = (state, action) => {
  const { id, type, ...otherDocumentFields } = action;
  const originalDocument = state.byDocumentId[id];
  const lastModified = moment().format();
  
  return {
    byDocumentId: {
      ...state.byDocumentId,
      [id]: {
        ...originalDocument,
        ...otherDocumentFields,
        lastModified,
      },
    },
  };
};
