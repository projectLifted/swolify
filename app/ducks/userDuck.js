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
        wallPosts: [...state.wallPosts, action.post]
      };

    case DELETE_POST:
      return {
        wallPosts: state.wallPosts.filter(post => post._id !== action.post)
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
  return {type: WALL_POST, post}
}

export function deleteWallPost(post) {
  return {type: DELETE_POST, post}
}
