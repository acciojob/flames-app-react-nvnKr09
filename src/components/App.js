import React, { Component, useState } from "react";
import "../styles/App.css";
import { getFlamesResult } from "./functions";

class App extends Component {
  constructor(props) {
    super(props);
    // this.inp1Val = "a";
    // this.inp2Val = "b";
    this.state = {
      answer: "Marriage",
      input1Value: "",
      input2Value: "",
    };
  }
  manageInputs(destinedInput, value) {
    // Hooks can only be called inside of the body of a function component.
    // This could happen for one of the following reasons:
    // 1. You might have mismatching versions of React and the renderer (such as React DOM)
    // 2. You might be breaking the Rules of Hooks
    // 3. You might have more than one copy of React in the same app
    // const [input1Value, setInput1Value] = useState("");
    // const [input2Value, setInput2Value] = useState("");
    switch (destinedInput) {
      case "input1":
        // setInput1Value(value);
        // this.inp1Val = value;
        this.setState({ ...this.state, input1Value: value });
        break;
      case "input2":
        // setInput2Value(value);
        // this.inp2Val = value;
        this.setState({ ...this.state, input2Value: value });
        break;
      default:
        break;
    }
    console.log(this.state.input1Value + " and  " + this.state.input2Value);
  }
  render() {
    const calculateFlames = () => {
      const result = getFlamesResult(
        this.state.input1Value,
        this.state.input2Value
      );
      this.setState({ ...this.state, answer: result });
      console.log(result);
    };
    const clearInputFields = () => {
      //   this.inp1Val = "";
      //   this.inp2Val = "";
      this.setState({
        ...this.state,
        input1Value: "",
        input2Value: "",
        answer: "",
      });
    };
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input
          type="text"
          name="name1"
          data-testid="input1"
          onChange={(e) =>
            this.manageInputs(
              e.target.getAttribute("data-testid"),
              e.target.value
            )
          }
          value={this.state.input1Value}
        />
        <input
          type="text"
          name="name2"
          data-testid="input2"
          onChange={(e) =>
            this.manageInputs(
              e.target.getAttribute("data-testid"),
              e.target.value
            )
          }
          value={this.state.input2Value}
        />
        <button data-testid="calculate_relationship" onClick={calculateFlames}>
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={clearInputFields}>
          Clear
        </button>
        <h3 data-testid="answer">Marriage</h3>
      </div>
    );
  }
}

export default App;
