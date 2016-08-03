import request from 'superagent';
import store from '../store';
import { postGoal } from '../ducks/goalDuck';
import { setGoals } from '../ducks/goalDuck';

export function createGoal(goalInfo, resolve, reject) {
  request.post('/api/goals')
    .send(goalInfo)
    .end((err, goal) => {
      if (err) {
        return reject(err);
      }
      return store.dispatch(postGoal(goal));
    });
}

export function getUserGoals(userId, resolve, reject) {
  request.get(`/api/goals/${userId}`)
    .end((err, goals) => {
      if (err) {
        return reject(err);
      }
      return resolve(goals);
    });
}

// export funcion setUserGoals(userId, goals, reject) {
//   request.get(`/api/goals/${userId}`, (err, userGoals))
// }
