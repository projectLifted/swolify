import request from 'superagent';

export function postGoal(goal, resolve, reject) {
  request.post(/* Our api address */)
    .send(goal)
    .end((err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
}
