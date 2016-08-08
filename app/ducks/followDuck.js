const ADD_TO_FOLLOWING = "user/ADD_TO_FOLLOWING";
const REMOVE_FOLLOW = "user/REMOVE_FOLLOW";

const initialState = {
   following: []
 };

export default function reducer(state = initialState, action) {
  console.log(state);
    switch(action.type) {
          case ADD_TO_FOLLOWING:
            return {following: [...state.following, action.follow]}

          case REMOVE_FOLLOW:
            return {following: state.following.filter(follow => follow._id !== action.follow)}
   }
   return state;
 }

export function followUser(follow) {
  console.log(follow);
   return {type: ADD_TO_FOLLOWING, follow};
}

export function removeFollow(follow) {
    return {type: REMOVE_FOLLOW, follow};
}
