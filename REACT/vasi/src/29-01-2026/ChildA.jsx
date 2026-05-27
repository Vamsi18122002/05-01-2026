function ChildA(props) {
    // console.log(props.s)
  return (
    <button onClick={() => props.s("Hello! and Hai! from the ChildA")}>  Click it </button>
  );
}

export default ChildA;
  