import React, { Component, useState } from "react";
/* ---------- Functional Component using State & Props ---------- */
function FunctionalComponent(props) {
  // State
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "2px solid blue",padding: "15px", margin: "10px", }} >
      <h2>Functional Component</h2>

      {/* Props */}
      <h3>Name from Props: {props.name}</h3>

      {/* State */}
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );}
/* ---------- Class Component using State & Props ---------- */
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div style={{ border: "2px solid green",padding: "15px", margin: "10px", }} >
        <h2>Class Component</h2>

        {/* Props */}
        <h3>Name from Props: {this.props.name}</h3>
        {/* State */}
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );}}
function A() {
  return (
    <div>
      <h1>React Component Data Management</h1>
      {/* Passing Props */}
      <FunctionalComponent name="Functional User" />
      <ClassComponent name="Class User" />
    </div>
  );}
export default A;