import { useState } from "react";
import Contador from "./Contador";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter(counter + 1);
  };

  const restCount = () => {
    setCounter(counter - 1);
  };

  const resetCount = () => {
    setCounter(0);
  };

  const isEven = counter % 2 === 0;

  return (
    <div>
      <Contador counter={counter} />
      <small>{isEven ? "isEven" : "Noup"}</small>
      <button onClick={addCount}>Incrementar</button>
      <button onClick={restCount}>Decrementar</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default App;
