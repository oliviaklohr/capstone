export const createNewUser = (state, action) => {
  const { id, firstName, lastName, created } = action;
  
  return {
    byUserId:{
      ...state.byUserId,
      [id]: {
        id,
        firstName,
        lastName,
        created,
      },
    },
  };
};
