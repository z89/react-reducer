export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTIONS.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
