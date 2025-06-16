import { useEffect, useState } from "react";

const Demo = () => {
  let colName = "SIT";
  const [value, setValue] = useState(colName);
  const [value1, setValue1] = useState("wqwqw");

  useEffect(() => {
    console.log(value, value1);
  }, [value, value1]);

  const changeColName = () => {
    colName = "sasasasas";
    console.log(colName);
  };

  const fnChange = () => {
    setValue("UBDT");
    setValue1("Vijay");
  };
  return (
    <>
      <div className="demo">{value}</div>
      <button onClick={fnChange}>Click here</button>
      <br />
      Col name is {colName}
      <button onClick={changeColName}>Change Col Name</button>
      <button onClick={() => setValue1("Vijay")}>Click</button>
    </>
  );
};

export default Demo;
