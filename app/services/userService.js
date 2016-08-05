import request from 'superagent';
import store from '../store';
import { signin, postMessage } from '../ducks/userDuck';

export function getAllUsers( resolve, reject ) {
	request.get( '/api/users' )
		.end( ( err, response ) => {
			if ( err ) {
				return reject( err );
			}
				return resolve( response );
		} );
}

export function putUser(userInfo, userId, resolve, reject) {
	request.put(`/api/users/${userId}`)
		.send(userInfo)
		.end((err, user) => {
			if (err) {
				console.log(err);
				return reject(err);
			}
			console.log(userInfo)
			return store.dispatch(signin(userInfo.body));
		});
}

export function postToWall(wallPost, userId, reject) {
	request.post(`/api/user/${userId}`)
		.send(wallPost)
		.end((err, post) => {
			if (err) {
				return console.log(err);
			}
			return store.dispatch(postMessage(wallPost));
		})
}
