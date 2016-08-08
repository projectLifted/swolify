import request from 'superagent';
import store from '../store';
import { friendDash, postFriendMessage, deleteFriendWallPost } from '../ducks/friendDuck';

export function getAllUsers( resolve, reject ) {
	request.get( '/api/users' )
		.end( ( err, response ) => {
			if ( err ) {
				return reject( err );
			}
				return resolve( response );
		} );
}


export function postToFriendWall(wallPost, userId, reject) {
	request.post(`/api/user/${userId}`)
		.send(wallPost)
		.end((err, post) => {
			if (err) {
				return
			}
			request.get(`/api/user/${userId}`)
				.end((err, finalPost) => {
					if (err) {
						return
					}
					return store.dispatch(postFriendMessage(finalPost.body))
				})
		})
}

export function deleteFromFriendWall(userId, postId, reject) {
	request.delete(`/api/user/${userId}/wallpost/${postId}`)
		.end((err, newPost) => {
			if (err) {
				return
			}
			return store.dispatch(deleteFriendWallPost(postId));
		});
}

export function getFriend(userId, resolve, reject) {
	request.get(`/api/users/${userId}`)
		.end((err, user) => {
			if (err) {
				return reject(err);
			}
			return store.dispatch(friendDash(user.body));
		});
}
