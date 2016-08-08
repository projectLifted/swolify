import request from 'superagent';
import store from '../store';
import { signin, putphoto, postMessage, deleteWallPost, deletephoto, addFollow, removeUserFollow, putuser } from '../ducks/userDuck';
import { followUser, removeFollow } from '../ducks/followDuck';

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
				return reject(err);
			}

			return store.dispatch(putuser(userInfo));
		});
}

export function putPhoto(photosObject, photosArray, userId, resolve, reject) {
	request.put(`/api/users/${userId}`)
		.send(photosObject)
		.end((err, user) => {
			if (err) {
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
				return reject(err);
			}
			return store.dispatch(putfriend(friendsArray));
		});
}

export function deletePhoto(photosObject, photosArray, userId, resolve, reject) {
	request.put(`/api/users/${userId}`)
		.send(photosObject)
		.end((err, user) => {
			if (err) {
				return reject(err);
			}
			return store.dispatch(deletephoto(photosArray));
		});
}

export function postToWall(wallPost, userId, reject) {
	request.post(`/api/user/${userId}`)
		.send(wallPost)
		.end((err, post) => {
			if (err) {
			}
			request.get(`/api/user/${userId}`)
				.end((err, finalPost) => {
					if (err) {
					}
					return store.dispatch(postMessage(finalPost.body))
				})
		})
}

export function deleteFromWall(userId, postId, reject) {
	request.delete(`/api/user/${userId}/wallpost/${postId}`)
		.end((err, newPost) => {
			if (err) {
				return
			}
			return store.dispatch(deleteWallPost(postId));
		});
}

export function getUser(userId, resolve, reject) {
	request.get(`/api/users/${userId}`)
		.end((err, user) => {
			if (err) {
				return reject(err);
			}
			return resolve( user );
		});
}

export function getFollowing(followId, reject) {
 	request.get(`/api/users/${followId}`)
 		.end((err, user) => {
 			if (err) {
 				return
 			}
 			return store.dispatch(followUser({_id: user.body._id, firstName: user.body.firstName, lastName: user.body.lastName, profilePicture: user.body.profilePicture}));
 		});
 }

 export function addUserToFollowing(userId, newFollowing) {
 	request.post(`/api/user/following/${userId}`)
 		.send({_id: newFollowing})
 		.end((err, user) => {
			if (err) {
					return
			}
			return store.dispatch(addFollow(newFollowing));
 		});

 }

 export function removeFromFollowing(userId, unfollowId) {
 	request.put(`/api/user/following/${userId}`)
 		.send({_id: unfollowId})
 		.end((err, updatedUser) => {
 			if (err) {
 				return
 			}
 			return store.dispatch(removeUserFollow(unfollowId));
 		})
	}
