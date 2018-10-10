export const receivedDocument = (state, action) => {
  const { id, type, ...docFields } = action;
  
  return {
    isFetching: false,
    byDocumentId: {
      ...state.byDocumentId,
      [id]: {
        id,
        ...docFields,
      },
    },
  };
};
