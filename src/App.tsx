import Incrementer from "./components/Incrementer";
import { ContextProvider } from "./store";

function App() {
  return (
    <ContextProvider>
      <Incrementer />
    </ContextProvider>
  );
}

export default App;
