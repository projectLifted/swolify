import { combineReducers } from 'redux';
import user from './ducks/userDuck';
import goals from './ducks/goalDuck';
import updateGoal from './ducks/updateGoalDuck';
import friend from './ducks/friendDuck';
import workouts from './ducks/workoutDuck';

export default combineReducers({
  user,
  goals,
  updateGoal,
  friend,
  workouts
});
