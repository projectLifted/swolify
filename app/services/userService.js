import request from 'superagent';
import store from '../store';
import { signin } from '../ducks/userDuck';

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
			return store.dispatch(signin(userInfo));
		});
}

export function getUser(userId, resolve, reject) {
	request.get(`/api/users/${userId}`)
		.end((err, user) => {
			if (err) {
				console.log(err);
				return reject(err);
			}
			return resolve( user );
		});
}
