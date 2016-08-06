const SELECT_GOAL = "goal/SELECT_GOAL";
const REMOVE_GOAL = "goal/REMOVE_GOAL";

const initialState = {
  goalId: "",
  goalName: ""
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_GOAL:
      return Object.assign({}, action.goal);

    case REMOVE_GOAL:
      return initialState;
  }
  return state;
}

export function selectGoal(goal) {
  return { type: SELECT_GOAL, goal };
}

export function removeGoal() {
  return { type: REMOVE_GOAL }
}
