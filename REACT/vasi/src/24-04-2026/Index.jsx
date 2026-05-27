 import React, {
  Component,
  useState,
  useMemo,
  useCallback,
  memo
} from "react";

const MemoComponent = memo(function MemoComponent({ value }) {
  return (
    <div style={{ border: "2px solid brown", padding: "15px", margin: "10px" }}>
      <h2>React.memo()</h2>
      <p>Value: {value}</p>
    </div>
  );
});

function ChildToParent(props) {
  return (
    <div style={{ border: "2px solid red", padding: "15px", margin: "10px" }}>
      <h2>Child to Parent</h2>
      <button onClick={() => props.sendData("Hello Parent")}>
        Send Data
      </button>
    </div>
  );
}

function ChildOne(props) {
  return (
    <div style={{ border: "2px solid purple", padding: "15px", margin: "10px" }}>
      <h2>Child One</h2>
      <button onClick={props.sendText}>Send to Child Two</button>
    </div>
  );
}

function ChildTwo(props) {
  return (
    <div style={{ border: "2px solid orange", padding: "15px", margin: "10px" }}>
      <h2>Child Two</h2>
      <p>{props.text}</p>
    </div>
  );
}

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "2px solid blue", padding: "15px", margin: "10px" }}>
      <h2>Functional Component</h2>
      <h3>Hello, {props.name}</h3>
      <p>Props Name: {props.name}</p>
      <p>State Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ border: "2px solid green", padding: "15px", margin: "10px" }}>
        <h2>Class Component</h2>
        <h3>Hello, {this.props.name}</h3>
        <p>Props Name: {this.props.name}</p>
        <p>State Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

function App() {
  const name = "John";
  const age = 22;
  const isStudent = true;
  const colors = ["Red", "Green", "Blue"];

  const [message, setMessage] = useState("");
  const [childText, setChildText] = useState("");
  const [number, setNumber] = useState(0);

  function greet() {
    return "Welcome to JSX";
  }

  function getChildData(data) {
    setMessage(data);
  }

  const total = useMemo(() => {
    return number * 10;
  }, [number]);

  const sendChildText = useCallback(() => {
    setChildText("Hello from Child One");
  }, []);

  return (
    <React.StrictMode>
      <>
        <h1>1. Functional Component Syntax</h1>
        <p>This App component is a Functional Component.</p>

        <React.Fragment>
          <h1>2. Fragment</h1>
          <p>Using React.Fragment</p>
        </React.Fragment>

        <>
          <h1>3. Fragment Shortcut</h1>
          <p>Using empty tags</p>
        </>

        <h1>4. Valid Things in JSX</h1>

        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
        <p>Addition: {10 + 5}</p>
        <p>{greet()}</p>

        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>

        <p>{age >= 18 ? "Adult" : "Minor"}</p>

        <h1>5. Invalid Things in JSX</h1>
        <p>Objects cannot be rendered directly</p>
        <p>if-else statements cannot be written inside return</p>
        <p>for loops cannot be written directly inside JSX</p>

        <h1>6. React Component Data Management</h1>

        <h2>I. State</h2>
        <p>State stores changing data inside component.</p>

        <h2>II. Props</h2>
        <p>Props pass data from parent to child component.</p>

        <h1>7. useState Method in JSX</h1>
        <p>Message: {message}</p>
        <button onClick={() => setMessage("Updated by useState")}>
          Update Message
        </button>

        <h2>I. Parent to Child</h2>
        <FunctionalComponent name="John" />

        <h2>II. Child to Parent</h2>
        <ChildToParent sendData={getChildData} />

        <h2>III. Child to Child</h2>
        <ChildOne sendText={sendChildText} />
        <ChildTwo text={childText} />

        <h1>8. React Optimization</h1>

        <h2>I. React.memo()</h2>
        <MemoComponent value={number} />

        <h2>II. useMemo()</h2>
        <p>Number: {number}</p>
        <p>Total: {total}</p>
        <button onClick={() => setNumber(number + 1)}>Increase Number</button>

        <h2>III. useCallback()</h2>
        <button onClick={sendChildText}>Run Callback</button>

        <h1>9. Functional and Class Components</h1>

        <FunctionalComponent name="John" />
        <ClassComponent name="David" />
      </>
    </React.StrictMode>
  );
}

export default App;