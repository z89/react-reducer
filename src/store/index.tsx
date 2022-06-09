import { ReactNode, useReducer } from "react";
import { CountContext } from "../context";
import { reducer } from "../reducer";
import { initialState } from "../context";

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CountContext.Provider value={{ state: state, dispatch: dispatch }}>{children}</CountContext.Provider>;
};
