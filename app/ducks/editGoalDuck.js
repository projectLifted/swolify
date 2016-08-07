const SELECT_GOAL = "goal/SELECT_GOAL";
const CLEAR_GOAL = "goal/CLEAR_GOAL";

const initialState = {
  goalId: "",
  goalType: "",
  goalName: "",
  goalMax: "",
  goalMileTime: "",
  goalDistance: ""
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_GOAL:
      return Object.assign({}, action.goal);

    case CLEAR_GOAL:
      return initialState;
  }
  return state;
}

export function selectGoalToEdit(goal) {
  return {type: SELECT_GOAL, goal};
}

export function clearGoal() {
  return {type: CLEAR_GOAL};
}
