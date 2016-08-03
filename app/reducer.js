import { combineReducers } from 'redux';
import user from './ducks/userDuck';
import goals from './ducks/goalDuck';

export default combineReducers({
  user,
  goals
});
