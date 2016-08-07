const POST_WORKOUT = "workouts/POST_WORKOUT";
const REMOVE_WORKOUT = "workouts/REMOVE_WORKOUT";

const initialState = {
  workouts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_WORKOUT:
      return {workouts: [...state.workouts, action.workout]}

    case REMOVE_WORKOUT:
      return {workouts: state.workouts.filter(workout => workout._id !== action.workout)}
  }
  return state;
}

export function postWorkout(workout) {
  return {type: POST_WORKOUT, workout};
}

export function removeWorkout(follow) {
  return {type: REMOVE_WORKOUT, follow};
}
