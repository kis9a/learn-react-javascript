import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();

export default function ContextCounter() {
  const [count, setCount] = useState(0);
  useContext(NumberContext);

  return (
    <div className="grid component-use-context">
      <h3 className="component-name">Context Counter</h3>
      <NumberContext.Provider value={count}>
        <div>
          <Display />
        </div>
      </NumberContext.Provider>
      <button onClick={() => setCount((prev) => prev + 1)}>Button</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>{(value) => <p>{value}</p>}</NumberContext.Consumer>
  );
}

ReactDOM.render(<ContextCounter />, document.querySelector("#root"));
