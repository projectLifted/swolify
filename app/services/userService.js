import request from 'superagent';
import store from '../store';
import { signin, putphoto, postMessage, deleteWallPost, deletephoto, putfriend, putuser } from '../ducks/userDuck';

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
			return store.dispatch(putuser(userInfo));
		});
}

export function putPhoto(photosObject, photosArray, userId, resolve, reject) {
	request.put(`/api/users/${userId}`)
		.send(photosObject)
		.end((err, user) => {
			if (err) {
				console.log(err);
				return reject(err);
			}
			return store.dispatch(putphoto(photosArray));
		});
}

export function putFriend(friendsObject, friendsArray, userId, resolve, reject) {
	request.put(`/api/users/${userId}`)
		.send(friendsObject)
		.end((err, user) => {
			if (err) {
				console.log(err);
				return reject(err);
			}
			return store.dispatch(putFriend(friendsArray));
		});
}

export function deletePhoto(photosObject, photosArray, userId, resolve, reject) {
	request.put(`/api/users/${userId}`)
		.send(photosObject)
		.end((err, user) => {
			if (err) {
				console.log(err);
				return reject(err);
			}
			return store.dispatch(deletephoto(photosArray));
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
