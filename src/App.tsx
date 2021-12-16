import { createContext, useReducer } from 'react';
import Button from './Button';

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.INCREMENT: 
    return { counter: state.counter + 1 }
    case ACTIONS.DECREMENT: 
    return { counter: state.counter - 1 }
    default:
      return state
    }
}
interface ICount {
  counter: number
}
  
interface ICountContext {
  counter?: ICount
  countState?: any
  countDispatch?: any
}

const initialState: ICount = { 
  counter: 0 
};
  
export const CountContext = createContext<ICountContext>({counter: initialState})

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <CountContext.Provider value={{ countState: state, countDispatch: dispatch}}>
      <div className="App">
        <Button/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
