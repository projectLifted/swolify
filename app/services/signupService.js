import request from 'superagent';

export function signupUser(userInfo, userId, resolve, reject) {
  request.put(`/api/users/${userId}`)
    .send(userInfo)
    .end((err, user) => {
      if (err) {
        console.log(err);
        return reject(err);
      }

      return resolve(userInfo);
    });


}
