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
    case PUT_PHOTO:
      return {
            _id: state._id,
            facebookId: state.facebookId,
            updated: state.updated,
            following: state.following,
            wallPosts: state.wallPosts,
            pictures: action.post,
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

      case ADD_FOLLOW:
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

        case REMOVE_FOLLOW:
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
          }

        case PUT_USER:
          return {
                _id: action.post._id,
                facebookId: action.post.facebookId,
                updated: action.post.updated,
                following: action.post.following,
                wallPosts: action.post.wallPosts,
                pictures: action.post.pictures,
                profilePicture: action.post.profilePicture,
                goalWeight: action.post.goalWeight,
                startWeight: action.post.startWeight,
                heightInches: action.post.heightInches,
                heightFeet: action.post.heightFeet,
                bodyType: action.post.bodyType,
                gender: action.post.gender,
                birthDate: action.post.birthDate,
                location: action.post.location,
                lastName: action.post.lastName,
                firstName: action.post.firstName,
                following: action.post.following
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
  return {type: PUT_USER, post};
}
