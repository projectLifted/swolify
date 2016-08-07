import { combineReducers } from 'redux';
import user from './ducks/userDuck';
import goals from './ducks/goalDuck';
import updateGoal from './ducks/updateGoalDuck';
import editGoal from './ducks/editGoalDuck';
import friend from './ducks/friendDuck';
import following from './ducks/followDuck';

export default combineReducers({
  user,
  goals,
  updateGoal,
  editGoal,
  friend,
  following
});
