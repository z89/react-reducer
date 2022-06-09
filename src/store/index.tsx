import { useReducer } from "react";
import { CountContext } from "../context";
import { reducer } from "../reducer";
import { initialState } from "../context";

export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CountContext.Provider value={{ countState: state, countDispatch: dispatch }}>{children}</CountContext.Provider>;
};
