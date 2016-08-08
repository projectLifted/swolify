import request from 'superagent';
import store from '../store';
import { postGoal, removeThisGoal, putGoal, postWorkout } from '../ducks/goalDuck';

export function createGoal(goalInfo, resolve, reject) {
  request.post('/api/goals')
    .send(goalInfo)
    .end((err, goal) => {
      if (err) {
        return reject(err);
      }
      return store.dispatch(postGoal(goal.body));
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

export function removeUserGoal(goalId) {
  request.delete(`/api/goal/${goalId}`)
    .end((err, goal) => {
      if (err) {
        return
      }
      return store.dispatch(removeThisGoal(goal.body));
    });
}

export function getOneGoal(goalId, resolve, reject) {
  request.get(`/api/goal/${goalId}`)
    .end((err, goal) => {
      if (err) {
        return reject(err);
      }
      return resolve(goal);
    });
}

export function deleteGoal(goalId, resolve, reject) {
  request.delete(`/api/goal/${goalId}`)
    .end((err, goal) => {
      if (err) {
        return reject(err);
      }
      return resolve(goal);
    });
}

export function updateGoal(goalInfo, goalId, resolve, reject) {
  request.put(`/api/goal/${goalId}`)
    .send(goalInfo)
    .end((err, goal) => {
      if (err) {
        return reject(err);
      }
      return store.dispatch(postGoal(goal.body));
    });
}
