import request from 'superagent';

export function postGoal(goal, resolve, reject) {
  request.post(/*Full api to mlab*/)
    .type('json')
    .send(goal)
    .end(callback);
}
