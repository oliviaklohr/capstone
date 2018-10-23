import { actionTypes } from '../../actions';
import { createSession } from './createSession';

const {
  CREATE_SESSION,
} = actionTypes;

export const session = (state = {}, action = {}) => {
  switch (action.type) {
    case CREATE_SESSION:
      return {
        ...state,
        ...createSession(state, action)
      };
    default:
      return state;
  }
};
