import shortid from 'shortid'; // TODO: replace with actual logic
import moment from 'moment';

export const CREATE_NEW_USER = 'USER / CREATE NEW';
export const CREATE_NEW_USER_SUCCESS = 'USER / CREATE NEW SUCCESS';
export const CREATE_NEW_USER_FAILURE = 'USER / CREATE NEW FAILURE';

const createNewUser = ({
  firstName = '',
  lastName = '',
  email = '',
  password = '',
  authToken: providedAuthToken,
  ...other,
}) => {
  const timeCreated = moment().format();
  const authToken = providedAuthToken || `usr_auth_${shortid.generate()}_${timeCreated}`;

  return {
    type: CREATE_NEW_USER,
    firstName,
    lastName,
    email,
    authToken,
    props: {
      ...other,
      password,
    },
  };
};


const success = ({
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isDeleted,
  password,
}) => ({
  type: CREATE_NEW_USER_SUCCESS,
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isDeleted,
  password,
});


const failure = ({ status }) => ({
  type: CREATE_NEW_USER_FAILURE,
  lastFetchStatus: status,
});

createNewUser.success = success;
createNewUser.failure = failure;

export { createNewUser };
