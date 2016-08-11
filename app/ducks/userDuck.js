const SIGNIN = "user/SIGNIN";
const SIGNOUT = "user/SIGNOUT";
const WALL_POST = "user/WALL_POST";
const PUT_PHOTO  = "user/PUT_PHOTO";
const DELETE_PHOTO  = "user/DELETE_PHOTO";
const DELETE_POST = "user/DELETE_POST";
const ADD_FOLLOW = "user/ADD_FOLLOW";
const REMOVE_FOLLOW = "user/REMOVE_FOLLOW";
const PUT_USER = "user/PUT_USER";

const initialState = {
  _id: "",
  facebookId: "",
  updated: new Date,
  following: [],
  wallPosts: [],
  pictures: [],
  profilePicture: "",
  startWeight: 0,
  heightInches: 0,
  heightFeet: 0,
  birthDate: new Date,
  location: "",
  lastName: "",
  firstName: "",
  loggedIn: false
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
        startWeight: state.startWeight,
        heightInches: state.heightInches,
        heightFeet: state.heightFeet,
        birthDate: state.birthDate,
        location: state.location,
        lastName: state.lastName,
        firstName: state.firstName,
        loggedIn: true
    };
    case PUT_PHOTO:
      return {
            _id: state._id,
            facebookId: state.facebookId,
            updated: state.updated,
            following: state.following,
            wallPosts: state.wallPosts,
            pictures: action.post,
            profilePicture: state.profilePicture,
            startWeight: state.startWeight,
            heightInches: state.heightInches,
            heightFeet: state.heightFeet,
            birthDate: state.birthDate,
            location: state.location,
            lastName: state.lastName,
            firstName: state.firstName,
            loggedIn: true

      };

      case ADD_FOLLOW:
        return {
              _id: state._id,
              facebookId: state.facebookId,
              updated: state.updated,
              following: [...state.following, action.follow],
              wallPosts: state.wallPosts,
              pictures: state.pictures,
              profilePicture: state.profilePicture,
              startWeight: state.startWeight,
              heightInches: state.heightInches,
              heightFeet: state.heightFeet,
              birthDate: state.birthDate,
              location: state.location,
              lastName: state.lastName,
              firstName: state.firstName,
              loggedIn: true

        };

        case REMOVE_FOLLOW:
          return {
            _id: state._id,
            facebookId: state.facebookId,
            updated: state.updated,
            following: state.following.filter(follow => follow._id !== action.follow),
            wallPosts: state.wallPosts,
            pictures: state.pictures,
            profilePicture: state.profilePicture,
            startWeight: state.startWeight,
            heightInches: state.heightInches,
            heightFeet: state.heightFeet,
            birthDate: state.birthDate,
            location: state.location,
            lastName: state.lastName,
            firstName: state.firstName,
            loggedIn: true
          }

        case PUT_USER:
          return {
                _id: state._id,
                facebookId: state.facebookId,
                updated: state.updated,
                wallPosts: state.wallPosts,
                pictures: state.pictures,
                profilePicture: state.profilePicture,
                startWeight: action.post.startWeight,
                heightInches: action.post.heightInches,
                heightFeet: action.post.heightFeet,
                birthDate: action.post.birthDate,
                location: action.post.location,
                lastName: action.post.lastName,
                firstName: action.post.firstName,
                following: state.following,
                loggedIn: true
          };

      case DELETE_PHOTO:
      return {
            _id: state._id,
            facebookId: state.facebookId,
            updated: state.updated,
            following: state.following,
            wallPosts: state.wallPosts,
            pictures: action.post,
            profilePicture: state.profilePicture,
            startWeight: state.startWeight,
            heightInches: state.heightInches,
            heightFeet: state.heightFeet,
            birthDate: state.birthDate,
            location: state.location,
            lastName: state.lastName,
            firstName: state.firstName,
            loggedIn: true
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
        startWeight: state.startWeight,
        heightInches: state.heightInches,
        heightFeet: state.heightFe,
        birthDate: state.birthDate,
        location: state.location,
        lastName: state.lastName,
        firstName: state.firstName,
        loggedIn: true
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
  return {type: WALL_POST, post};
}

export function putphoto(post) {
  return {type: PUT_PHOTO, post};
}

export function deletephoto(post) {
  return {type: DELETE_PHOTO, post};
}

export function deleteWallPost(post) {
  return {type: DELETE_POST, post};
}

export function addFollow(follow) {
  return {type: ADD_FOLLOW, follow};
}

export function removeUserFollow(follow) {
  return {type: REMOVE_FOLLOW, follow};
}

export function putuser(post) {
  console.log(post);
  return {type: PUT_USER, post};
}
