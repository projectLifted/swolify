const POST_GOAL = "goal/POST_GOAL";
const PUT_GOAL = "goal/PUT_GOAL";
const REMOVE_GOAL = "goal/REMOVE_GOAL";

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
          goals: [...state.goals, action.goal]
        }

    case REMOVE_GOAL:
      return {
        goals: state.goals.filter(goal => goal._id !== action.goal._id)
      };

  }
  return state;
}

export function postGoal(goal) {
  return { type: POST_GOAL, goal };
}

export function putGoal(goal) {
  return { type: PUT_GOAL, goal };
}

export function removeThisGoal(goal) {
  return { type: REMOVE_GOAL, goal };
}

export function postWorkout (workout) {
  return {
    workouts: { type: POST_WORKOUT, workout }
  }
}
