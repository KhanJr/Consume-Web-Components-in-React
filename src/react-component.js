/* eslint-disable react/no-typos */
// This file is a web-component.
import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from "prop-types";

class MyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc() {
    this.setState((prev) => ({
      count: prev + 1,
    }));
  }
  dec() {
    this.setState((prev) => ({
      count: prev - 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Counter {this.props.name} </h1>
        <button onClick={() => this.inc()}>Up</button>
        <button onClick={() => this.dec()}>Down</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

MyCounter.PropTypes = {
  name: PropTypes.string,
};

customElements.define(
  "my-counter",
  reactToWebComponent(MyCounter, React, ReactDOM)
);
// ReactDOM.render(<MyCounter />, document.getElementById("root"));
export default MyCounter;
