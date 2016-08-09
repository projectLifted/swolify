const FRIEND_DASH = "friend/FRIEND_DELETE_POST";
const FRIEND_WALL_POST = "friend/FRIEND_WALL_POST";
const FRIEND_DELETE_POST = "friend/FRIEND_DELETE_POST";

const initialState = {
  _id: "",
  facebookId: "",
  updated: new Date,
  following: [],
  wallPosts: [],
  pictures: [],
  profilePicture: "",
  goalWeight: 0,
  startWeight: 0,
  heightInches: 0,
  heightFeet: 0,
  bodyType: "",
  gender: "",
  birthDate: new Date,
  location: "",
  lastName: "",
  firstName: ""
};

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case FRIEND_DASH:
      return Object.assign({}, action.friend)

    case FRIEND_WALL_POST:
      return {
        _id: state._id,
        facebookId: state.facebookId,
        updated: state.updated,
        following: state.following,
        wallPosts: [...state.wallPosts, action.post],
        pictures: state.pictures,
        profilePicture: state.profilePicture,
        goalWeight: state.goalWeight,
        startWeight: state.startWeight,
        heightInches: state.heightInches,
        heightFeet: state.heightFeet,
        bodyType: state.bodyType,
        gender: state.gender,
        birthDate: state.birthDate,
        location: state.location,
        lastName: state.lastName,
        firstName: state.firstName
    };

    case FRIEND_DELETE_POST:
      return {
        wallPosts: state.wallPosts.filter(post => post._id !== action.post),
        _id: state._id,
        facebookId: state.facebookId,
        updated: state.updated,
        following: state.following,
        pictures: state.pictures,
        profilePicture: state.profilePicture,
        goalWeight: state.goalWeight,
        startWeight: state.startWeight,
        heightInches: state.heightInches,
        heightFeet: state.heightFeet,
        bodyType: state.bodyType,
        gender: state.gender,
        birthDate: state.birthDate,
        location: state.location,
        lastName: state.lastName,
        firstName: state.firstName
  }
}
  return state;
}

export function friendDash(friend) {
  return {type: FRIEND_DASH, friend};
}

export function postFriendMessage(post) {
  return {type: FRIEND_WALL_POST, post}
}

export function deleteFriendWallPost(post) {
  return {type: FRIEND_DELETE_POST, post}
}
