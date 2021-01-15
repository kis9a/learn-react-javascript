import React, { useState, useEffect } from "react";

export class EffectCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `${this.state.count} times clicked`;
  }

  componentDidUpdate() {
    document.title = `${this.state.count} times clicked`;
  }

  render() {
    return (
      <>
        <div className="m1 component-effect-button">
          <h2 className="mk component-name">Effect Counter</h2>
          <p className="p1">{`${this.state.count} times clicked`}</p>
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
    document.title = `${count} times clicked`;
  });

  return (
    <>
      <div className="m1 component-effect-button">
        <h2 className="mk component-name">Effect Counter</h2>
        <p className="p1">{`${count} times clicked`}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Button</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};
