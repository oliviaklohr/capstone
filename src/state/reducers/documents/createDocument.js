export const createDocument = (state, action) => {
  const { id, type, ...documentFields } = action;

  return {
    byDocumentId: {
      ...state.byDocumentId,
      [id] : {
        id,
        ...documentFields,
      },
    }
  };
};
