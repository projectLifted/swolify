import request from 'superagent';

export function postGoal(goal, resolve, reject) {
  request.post('/api/goals')
    .send(goal)
    .end((err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
}
