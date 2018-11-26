import shortid from 'shortid'; // TODO: replace with actual logic
import moment from 'moment';

export const CREATE_NEW_USER = 'USER / CREATE NEW';
export const CREATE_NEW_USER_SUCCESS = 'USER / CREATE NEW SUCCESS';
export const CREATE_NEW_USER_FAILURE = 'USER / CREATE NEW FAILURE';

const INITIAL_PEN_COLORS = [
  'rgba(0, 0, 0, 1)',
  'rgba(97, 97, 97, 1)',
  'rgba(189, 189, 189, 1)',
  'rgba(213, 0, 0, 1)',
  'rgba(237, 96, 3, 1)',
  'rgba(252, 164, 32, 1)',
  'rgba(255, 253, 56, 1)',
  'rgba(171, 253, 57, 1)',
  'rgba(99, 184, 77, 1)',
  'rgba(13, 114, 61, 1)',
  'rgba(20, 116, 251, 1)',
  'rgba(28, 76, 189, 1)',
  'rgba(19, 13, 116, 1)',
  'rgba(96, 29, 148, 1)',
  'rgba(172, 17, 199, 1)',
  'rgba(255, 21, 220, 1)',
];

const INITIAL_HIGHLIGHTER_COLORS = [
  'rgba(0, 0, 0, 0.5)',
  'rgba(97, 97, 97, 0.5)',
  'rgba(189, 189, 189, 0.5)',
  'rgba(213, 0, 0, 0.5)',
  'rgba(237, 96, 3, 0.5)',
  'rgba(252, 164, 32, 0.5)',
  'rgba(255, 253, 56, 0.5)',
  'rgba(171, 253, 57, 0.5)',
  'rgba(99, 184, 77, 0.5)',
  'rgba(13, 114, 61, 0.5)',
  'rgba(20, 116, 251, 0.5)',
  'rgba(28, 76, 189, 0.5)',
  'rgba(19, 13, 116, 0.5)',
  'rgba(96, 29, 148, 0.5)',
  'rgba(172, 17, 199, 0.5)',
  'rgba(255, 21, 220, 0.5)',
];

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
