import { combineReducers } from 'redux';
import user from './ducks/userDuck';
import goals from './ducks/goalDuck';
import updateGoal from './ducks/updateGoalDuck';

export default combineReducers({
  user,
  goals,
  updateGoal
});
