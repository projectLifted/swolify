const SIGNIN = "user/SIGNIN";
const SIGNOUT = "user/SIGNOUT";
const WALL_POST = "user/WALL_POST";
const DELETE_POST = "user/DELETE_POST";
const ADD_FOLLOWING = "user/ADD_FOLLOWING";
const REMOVE_FOLLOWING = "user/REMOVE_FOLLOWING";

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
    case SIGNIN:
      return Object.assign({}, action.user, {loggedIn: true})

    case SIGNOUT:
      return initialState;

    case WALL_POST:
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

    case DELETE_POST:
      return {
        _id: state._id,
        facebookId: state.facebookId,
        updated: state.updated,
        following: state.following,
        wallPosts: state.wallPosts.filter(post => post._id !== action.post),
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

    case ADD_FOLLOWING:
      return {
        _id: state._id,
        facebookId: state.facebookId,
        updated: state.updated,
        following: [...state.following, action.follow],
        wallPosts: state.wallPosts,
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

    case REMOVE_FOLLOWING:
      return {
        _id: state._id,
        facebookId: state.facebookId,
        updated: state.updated,
        following: state.following.filter(follow => follow._id !== action.follow),
        wallPosts: state.wallPosts,
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

  }
  return state;
}

export function signin(user) {
  return {type: SIGNIN, user};
}

export function signout() {
  return {type: SIGNOUT};
}

export function postMessage(post) {
  console.log(post)
  return {type: WALL_POST, post}
}

export function deleteWallPost(post) {
  return {type: DELETE_POST, post}
}

export function followUser(follow) {
  return {type: ADD_FOLLOWING, follow}
}

export function unfollowUser(follow) {
  return {type: REMOVE_FOLLOWING, follow}
}
