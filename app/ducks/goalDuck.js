const POSTGOAL = "goal/POSTGOAL";

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
  }
  return state;
}

export function postGoal(goal) {
  return { type: POSTGOAL, goal }
}
