import { combineReducers } from 'redux';
import { documents } from './documents';
import { users } from './users';
import { session } from './session';

const rootReducer = combineReducers({
  documents,
  users,
  session,
});

export default rootReducer;
