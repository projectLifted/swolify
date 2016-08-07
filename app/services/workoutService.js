import request from 'superagent';
import store from '../store';
import { postWorkout, removeWorkout } from '../ducks/workoutDuck';

export function createWorkout(workout, goalId, resolve, reject) {
  request.post(`/api/workout/${goalId}`)
    .send(workout)
    .end((err, postedWorkout) => {
      if (err) {
        return reject(err);
      }
      console.log(postedWorkout.body)
      return store.dispatch(postWorkout(postedWorkout.body))
    });
}

export function deleteWorkout(goalId, workoutId, resolve, reject) {
  request.delete(`/api/workout/${goalId}/${workoutId}`)
    .end((err, removedWorkout) => {
      if (err) {
        return reject(err);
      }
      return store.dispatch(removeWorkout(removedWorkout.body));
    });
}
