import { combineReducers } from 'redux';
import user from './ducks/userDuck';
import goal from './ducks/goalDuck';

export default combineReducers({
  user,
  goal
});
