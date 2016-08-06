const SIGNIN = "user/SIGNIN";
const SIGNOUT = "user/SIGNOUT";
const WALL_POST = "user/WALL_POST";
const DELETE_POST = "user/DELETE_POST";

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
