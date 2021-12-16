import { useReducer } from 'react';

const ACTIONS = {
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

const initialState = { 
  counter: 0 
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
     <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
     <h1>{state.counter}</h1>
     <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
    </div>
  );
}

export default App;
