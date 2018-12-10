import axios from 'axios';

export const getNotebooksApi = (API_URL) => ({
  createNewNotebook: (payload) => axios.post(`${API_URL}/notebook`, payload),
  fetchNotebooksForUser: ({ ownderid }) => axios.get(`${API_URL}/notebook/ownerid/${ownderid}`),
  deleteNotebook: ({ notebookId }) => axios.delete(`${API_URL}/notebook/${notebookId}`),
});

