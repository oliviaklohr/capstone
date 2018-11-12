import axios from 'axios';

export const getPagesApi = (API_URL) => ({
  createNewPage: (payload) => axios.post(`${API_URL}/page`, payload),
  fetchPagesForNotebook: ({ notebookid }) => axios.get(`${API_URL}/page/notebookid/${notebookid}`),
  updatePage: ({ pageId, ...payload }) => axios.put(`${API_URL}/page/${pageId}`, payload),
});

