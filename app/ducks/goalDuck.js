const POST_GOAL = "goal/POST_GOAL";
const POST_WORKOUT = "goal/POST_WORKOUT";

const initialState = {
  // goalType: "",
  // goalName: "",
  // goalStartDate: new Date,
  // goalMax: 0,
  // goalDistance: 0,
  // goalMileTime: 0,
  // workouts: [],
  // goalOwner: ""
  goals: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_GOAL:
      return {
        goals: [...state.goals, action.goal]
      };

    case POST_WORKOUT:
      return {
        workouts: [...state.workouts, action.workout]
      };
  }
  return state;
}

export function postGoal(goal) {
  return { type: POST_GOAL, goal };
}

export function postWorkout (workout) {
  return {
    workouts: { type: POST_WORKOUT, workout }
  }
}
