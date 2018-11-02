import axios from 'axios';

// TODO: we need to add a way to check if we're in prod or not
import environs from './environmentVariables';

const createNewUser = (payload) => axios.post(`${environs.API_URL}/user`, payload);

const loginUser = ({ email }) => axios.get(`${environs.API_URL}/user/email/${email}`);

const createNewNotebook = (payload) => axios.post(`${environs.API_URL}/notebook`, payload);

const createNewPage = (payload) => axios.post(`${environs.API_URL}/page`, payload);

export default {
  createNewUser,
  loginUser,
  createNewNotebook,
  createNewPage,
};

