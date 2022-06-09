import { createContext } from "react";

export interface ICount {
  counter: number;
}

interface ICountContext {
  state: ICount;
  dispatch: React.Dispatch<{ type: string }>;
}

export const initialState: ICount = {
  counter: 0,
};

export const CountContext = createContext<ICountContext>({ state: initialState, dispatch: () => {} });
