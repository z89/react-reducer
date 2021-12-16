import { useContext} from 'react'
import { CountContext, ACTIONS} from './App'
  
export default function Button() {
    const ctx = useContext(CountContext)

    return (
        <div>
            <h1>{ctx.countState.counter}</h1>
            <button onClick={() => ctx.countDispatch({type: ACTIONS.INCREMENT})}>+</button>
            <button onClick={() => ctx.countDispatch({type: ACTIONS.DECREMENT})}>-</button>
            <button onClick={() => ctx.countDispatch({type: ACTIONS.INCREMENT})}>+</button>
            <button onClick={() => ctx.countDispatch({type: ACTIONS.DECREMENT})}>-</button>
        </div>
    )
}
