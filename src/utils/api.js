import axios from 'axios';

// TODO: we need to add a way to check if we're in prod or not
import environs from './environmentVariables';

const createNewUser = (payload) => axios.post(`${environs.API_URL}/user`, payload);
// http://localhost:8080/user/email/noahpanicola@gmail.com

const loginUser = ({ email }) => axios.get(`${environs.API_URL}/user/email/${email}`);

export default {
  createNewUser,
  loginUser,
};

