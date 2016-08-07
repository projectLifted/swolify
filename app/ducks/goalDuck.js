// import { List, Map } from 'immutable';
const POST_GOAL = "goal/POST_GOAL";
const PUT_GOAL = "goal/PUT_GOAL";
const REMOVE_GOAL = "goal/REMOVE_GOAL";
// const SET_GOALS = "goal/SET_GOALS";

const initialState = {
  goals: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_GOAL:
      return {
        goals: [...state.goals, action.goal]
      }

    case PUT_GOAL:
        return {
          goals: action.goal
        }

    case REMOVE_GOAL:
      return {
        goals: state.goals.filter(goal => goal._id !== action.goal._id)
      };
    // case POST_WORKOUT:
    //   return {
    //     workouts: [...state.workouts, action.workout]
    //   };
  }
  return state;
}

export function postGoal(goal) {
  console.log(goal);
  return { type: POST_GOAL, goal };
}

export function putGoal(goal) {
  return { type: PUT_GOAL, goal };
}

export function removeThisGoal(goal) {
  return { type: REMOVE_GOAL, goal };
}

// export function setGoals(goals) {
//   return { type: SET_GOALS, goals };
// }

// export function postWorkout (workout) {
//   return {
//     workouts: { type: POST_WORKOUT, workout }
//   }
// }
