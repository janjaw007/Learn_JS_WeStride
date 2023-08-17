const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

export const initiaclCount = 0;

export const actions = {
  increment: INCREMENT,
  decrement: DECREMENT,
  reset: RESET,
};

export const counterReducer = (state: any, actions: any) => {
  switch (actions.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};
