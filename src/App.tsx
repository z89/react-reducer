import Button from "./components/Button";
import { ContextProvider } from "./store";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Button />
      </div>
    </ContextProvider>
  );
}

export default App;
