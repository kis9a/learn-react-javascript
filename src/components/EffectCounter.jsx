import React, { useState, useEffect } from "react";

export class EffectCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `${this.state.count}`;
  }

  render() {
    return (
      <>
        <div className="grid component-effect-button">
          <h3 className="component-name">Effect Counter</h3>
          <p>{`${this.state.count}`}</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Button
          </button>
          <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </>
    );
  }
}

export const EffectCounterFunction = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}`;
  });

  return (
    <>
      <div className="grid component-effect-button">
        <h3 className="component-name">Effect Counter</h3>
        <p>{`${count}`}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Button</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};
