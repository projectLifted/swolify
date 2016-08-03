const SIGNIN = "user/SIGNIN";
const SIGNOUT = "user/SIGNOUT";

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
