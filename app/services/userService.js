import request from 'superagent';
import store from '../store';
import { signin, postMessage, deleteWallPost } from '../ducks/userDuck';

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
	console.log(wallPost, userId);
	request.post(`/api/user/${userId}`)
		.send(wallPost)
		.end((err, post) => {
			if (err) {
				return console.log(err);
			}
			request.get(`/api/user/${userId}`)
				.end((err, finalPost) => {
					if (err) {
						return console.log(err);
					}
					console.log(finalPost.body);
					return store.dispatch(postMessage(finalPost.body))
				})
		})
}

export function deleteFromWall(userId, postId, reject) {
	console.log(userId, postId)
	request.delete(`/api/user/${userId}/wallpost/${postId}`)
		.end((err, newPost) => {
			if (err) {
				return console.log(err);
			}
			console.log(newPost)
			return store.dispatch(deleteWallPost(postId));
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
