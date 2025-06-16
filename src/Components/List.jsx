import { useState } from "react";
import { Links } from "./Links";
const List = (props) => {
  let [counter, setCounter] = useState(0);
  let [value, setValue] = useState(0);

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input type="number" value={value} onChange={(e) => changeValue(e)} />
      <h1>Count Value is {counter}</h1>
      <button onClick={() => setCounter(parseInt(counter) + 1)}>
        Increment
      </button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <button onClick={() => setCounter(value)}>Set Counter value</button>
      <Links a={counter} b={value} c={setCounter} />
    </>
  );
};

export default List;
