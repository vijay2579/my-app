const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") return a + b;
  else return "Not a valid number";
};

const subtract = (a, b) => {
  let c = 10;
  if (typeof a === "number" && typeof b === "number") return a - b;
  else return "Not a valid number";
};

console.log(c);

export { add };
export default subtract;
