import request from 'superagent';
import store from '../store';
import { postWorkout, removeWorkout } from '../ducks/workoutDuck';
import moment from 'moment';

export function createWorkout(workout, goalId, goalName, goalType, resolve, reject) {
  request.post(`/api/workout/${goalId}`)
    .send(workout)
    .end((err, workout) => {
      if (err) {
        return reject(err);
      }
      workout.body.goalName =goalName;
      workout.body.goalId = goalId;
      workout.body.goalType = goalType;
      workout.body.workoutDate = moment(workout.body.workoutDate).format('L');
      return store.dispatch(postWorkout(workout.body));
    });
}

export function deleteWorkout(goalId, workoutId, resolve, reject) {
  request.delete(`/api/workout/${goalId}/${workoutId}`)
    .end((err, removedWorkout) => {
      if (err) {
        return reject(err);
      }
      return store.dispatch(removeWorkout(workoutId));
    });
}
