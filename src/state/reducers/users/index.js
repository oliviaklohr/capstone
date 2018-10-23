import { actionTypes } from '../../actions';
import { createNewUser } from './createNewUser';

const {
  CREATE_NEW_USER,
} = actionTypes;

// TODO: after TRUE user models are implemented in the DB, we need to set this to JUST be an empty array `[]`
const byUserId = {
  'user_hVS1WWovD__2018-10-18T09:37:10-05:00': {
    id: 'user_hVS1WWovD__2018-10-18T09:37:10-05:00',
    firstName: 'dylan',
    lastName: 'klohr',
    created: '2018-10-18T09:37:10-05:00'
  },
};

const initialState = {
  byUserId,
};

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        ...createNewUser(state, action),
      };
    default:
      return state;
  }
};
