export const Links = (props) => {
  let { a, b, c } = props;

  const changeVal = () => {
    a = 10;
    console.log(a);
  };
  return (
    <div className="links">
      Counter {a}
      Value {b}
      <button onClick={() => changeVal()}>Change from Child Component</button>
    </div>
  );
};
