import request from "superagent";

export function getAuth(resolve, reject){
  request.get("/api/auth/facebook/isauthed")
    .end((err, response)=> {
      if (err) {
        return reject(err);
      }
        return resolve(response);
    })
}
