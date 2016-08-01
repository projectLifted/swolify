const SIGNIN = "user/SIGNIN";
const SIGNOUT = "user/SIGNOUT";

const initialState = {
  facebookId: "",
  firstName: "",
  lasName: "",
  email: "",
  profilePicture: "",
  pictures: [],
  wallPosts: [],
  updatedDate: new Date,
  heightFeet: 0,
  heightInches: 0,
  startWeight: 0,
  goalWeight: 0,
  gender: "",
  birthDate: new Date,
  following: [],
  location: "",
  loggedIn: false,
  bodyType: "",
  updated: new Date
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SIGNIN:
      return Object.assign({}, action.user, {loggedIn: true});

    case SIGNOUT:
      return initialState;
  }
  return state;
}

export function signin(user) {
  return {type: SIGNIN, user};
}

export function signout() {
  return {type: SIGNOUT};
}
