import axios from 'axios';

export const getUserApi = (API_URL) => ({
  createNewUser: (payload) => axios.post(`${API_URL}/user`, payload),
  loginUser: ({ email }) => axios.get(`${API_URL}/user/email/${email}`),
});
