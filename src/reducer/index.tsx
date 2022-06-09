import { ICount } from "../context";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

export function reducer(state: ICount, action: { type: string }) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTIONS.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
