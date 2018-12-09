import shortid from 'shortid';
import moment from 'moment';
import { INITIAL_PEN_COLORS, INITIAL_HIGHLIGHTER_COLORS } from '../../../utils/_initialToolColors';

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
      activeTool: 'pen',
      penLineWidth: 3,
      highlighterLineWidth: 10,
      activePenColor: INITIAL_PEN_COLORS[0],
      activeHighlighterColor: INITIAL_HIGHLIGHTER_COLORS[0],
      penColors: [
        ...INITIAL_PEN_COLORS,
      ],
      highlighterColors: [
        ...INITIAL_HIGHLIGHTER_COLORS,
      ]
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
  lastFetchStatus: status,
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
