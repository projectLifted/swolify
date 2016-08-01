import request from 'superagent';
import store from '../store';
import { postWorkout } from '../ducks/goalDuck';

export function createWorkout(workout, goalId, resolve, reject) {
  request.post(`/api/goals/${goalId}`)
    .send(workout)
    .end((err, postedWorkout) => {
      if (err) {
        return reject(err);
      }
      return store.dispatch(postWorkout(postedWorkout))
    });
}
