import { createContext } from "react";

interface ICount {
  counter: number;
}

interface ICountContext {
  counter?: ICount;
  countState?: any;
  countDispatch?: any;
}

export const initialState: ICount = {
  counter: 0,
};

export const CountContext = createContext<ICountContext>({ counter: initialState });
