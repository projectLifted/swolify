const POSTGOAL = "goal/POSTGOAL";
const POSTWORKOUT = "goal/POSTWORKOUT";

const initialState = {
  goalType: "",
  goalName: "",
  goalStartDate: new Date,
  goalEndDate: new Date,
  goalMax: 0,
  goalDistance: 0,
  goalMileTime: 0,
  workouts: [],
  goalOwner: ""
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POSTGOAL:
      return Object.assign({}, action.goal);

    case POSTWORKOUT:
      return {
        workouts: [...state.workouts, action.workout]
      }
  }
  return state;
}

export function postGoal(goal) {
  return { type: POSTGOAL, goal }
}

export function postWorkout (workout) {
  return {
    workouts: { type: POSTWORKOUT, workout }
  }
}
