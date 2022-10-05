import { useState } from "react";

/*Estado inicial del contador, se coloca por fuera del compoente ya que asi evitamos al renderizar crear varias veces esta variable
inicial... Esto solo se hace cunado queremos devolver un estado espoecifico ya si sera un estado inicial con todo en cero no vale la pena
*/

// const INITIAL_STATE_COUNTER = {
//   left: 0,
//   right: 0,
//   message: "Soy un mensaje bonito",
// };

//

const NotUsedClicks = () => {
  return <h1>No se ha usado el contador!</h1>;
};

const ListOfClicks = ({ clicks }) => {
  return (
    <>
      <p>Veces que se ha dado click: {clicks.length}</p>
      <br />
      {clicks}
    </>
  );
};

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // const [counters, setCounters] = useState(INITIAL_STATE_COUNTER);

  const [clicks, setClicks] = useState([]);

  const handleLeftClick = () => {
    // setCounters({
    //   ...counters,
    //   left: counters.left + 1,
    // });

    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleRightClick = () => {
    // setCounters({
    //   ...counters,
    //   right: counters.right + 1,
    // });

    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleResetClick = () => {
    // setCounters(INITIAL_STATE_COUNTER);
    setClicks([]);
  };

  const left = clicks.filter((click) => click === "L");
  const right = clicks.filter((click) => click === "R");

  return (
    <div>
      {left.length}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      <button onClick={handleResetClick}>reset</button>
      {right.length}
      <br />
      {clicks.length === 0 ? (
        <NotUsedClicks />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

export default App;
