import { useState } from "react";
import Navigation from "./Components/Navigation";
import Table from "./Components/Table";
const App = () => {
  const [count, setCount] = useState(0);

  const data1 = [
    {
      name: "GMIT",
      value: 1,
    },
    {
      name: "UBDT",
      value: 2,
    },
    {
      name: "SIT",
      value: 3,
    },
    {
      name: "STJBIT",
      value: 4,
    },
  ];

  const data2 = [
    {
      name: "GMIT 1",
      value: 1,
    },
    {
      name: "UBDT 1",
      value: 2,
    },
    {
      name: "SIT 1",
      value: 3,
    },
    {
      name: "STJBIT 1",
      value: 4,
    },
    {
      name: "UBDT 1",
      value: 2,
    },
    {
      name: "SIT 1",
      value: 3,
    },
    {
      name: "STJBIT 1",
      value: 4,
    },
  ];
  return (
    <div className="container">
      <Navigation />
      <Table data={data1} c={count} setFn={setCount} />
      {/* <Table data={data2} /> */}
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
};

export default App;
