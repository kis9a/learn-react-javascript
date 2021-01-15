import React from "react";

// initialize random number 1~10
const initialState = Math.floor(Math.random() * 10) + 1;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: initialState,
      open: true,
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <div className="m1 component-state-counter">
          <h2 className="mk component-name">State Counter</h2>
          <button onClick={this.toggle}>
            {this.state.open ? "Close" : "Open"}
          </button>
          <div className={this.state.open ? "isOpen" : "isClose"}>
            <p className="p1">Current number is {this.state.count}</p>
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              {" "}
              + 1{" "}
            </button>
            <button
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              {" "}
              - 1{" "}
            </button>
            <button onClick={() => this.setState({ count: 0 })}>0</button>
            <button onClick={() => this.setState({ count: initialState })}>
              Reset
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
