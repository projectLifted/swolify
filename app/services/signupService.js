import request from 'superagent';
import store from '../store';
import { signin } from '../ducks/userDuck';

export function signupUser(userInfo, userId, resolve, reject) {
  request.put(`/api/users/${userId}`)
    .send(userInfo)
    .end((err, user) => {
      if (err) {
        console.log(err);
        return reject(err);
      }

      return store.dispatch(signin(user));
    });
}
