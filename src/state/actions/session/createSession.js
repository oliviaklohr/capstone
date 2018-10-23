export const CREATE_SESSION = 'SESSION / CREATE SESSION';

export const createSession = ({ userId = '' } = {}) => ({
  type: CREATE_SESSION,
  userId,
});
