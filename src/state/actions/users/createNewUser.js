import shortid from 'shortid'; // TODO: replace with actual logic
import moment from 'moment';

export const CREATE_NEW_USER = 'USERS / CREATE NEW';

export const createNewUser = (firstName, lastName) => {
  const created = moment().format();

  return {
    type: CREATE_NEW_USER,
    id: `user_${shortid.generate()}__${created}`,
    firstName,
    lastName,
    created,
  };
};

