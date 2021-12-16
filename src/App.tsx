import { useState } from 'react';

function App() {
  const [count, setCounter] = useState(0)

  function trigger(action: boolean) {
    console.log(count)
    action ? setCounter(prevCount => prevCount + 1) : setCounter(prevCount => prevCount - 1)
    console.log(count)
  }

  return (
    <div className="App">
     <button onClick={() => trigger(true)}>+</button>
     <h1>{count}</h1>
     <button onClick={() => trigger(false)}>-</button>
     
    </div>
  );
}

export default App;
