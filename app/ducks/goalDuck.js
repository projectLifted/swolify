// import { List, Map } from 'immutable';

const POST_GOAL = "goal/POST_GOAL";
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

      // case SET_GOALS:
      //   return state.set('goals', List.of(...action.goals));

    // case POST_WORKOUT:
    //   return {
    //     workouts: [...state.workouts, action.workout]
    //   };
  }
  return state;
}

export function postGoal(goal) {
  return { type: POST_GOAL, goal };
}

// export function setGoals(goals) {
//   return { type: SET_GOALS, goals };
// }

// export function postWorkout (workout) {
//   return {
//     workouts: { type: POST_WORKOUT, workout }
//   }
// }
