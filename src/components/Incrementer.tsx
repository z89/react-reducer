import { useContext } from "react";
import { CountContext } from "../context";
import { ACTIONS } from "../reducer";

export default function Button() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </div>
  );
}
