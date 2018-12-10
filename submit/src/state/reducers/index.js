import { combineReducers } from 'redux';
import { user } from './user';
import { notebooks } from './notebooks';
import { pages } from './pages';

const rootReducer = combineReducers({
  user,
  notebooks,
  pages,
});

export default rootReducer;
