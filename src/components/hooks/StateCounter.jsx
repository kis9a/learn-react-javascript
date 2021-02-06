import React from "react";

const initialState = 0;

export default class StateCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: initialState,
      open: true,
    };
  }

  render() {
    return (
      <>
        <div className="grid component-state-counter">
          <h3 className="component-name">State Counter</h3>
          <p>{this.state.count}</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            {" "}
            Button{" "}
          </button>
          <button onClick={() => this.setState({ count: initialState })}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
