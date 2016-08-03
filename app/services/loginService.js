import request from "superagent";
import store from '../store';
import { signin } from '../ducks/userDuck';

export function getAuth(resolve, reject){
  request.get("/api/auth/facebook/isauthed")
    .end((err, user) => {
      if (err) {
        return reject(err);
      }
      return resolve(user);
    });
}
