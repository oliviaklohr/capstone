export const createSession = (state, action) => {
  const { type, ...attributes } = action;
  return {
    ...attributes,
  };
};


