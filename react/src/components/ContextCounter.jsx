import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();

export default function ContextCounter() {
  const [count, setCount] = useState(0);
  useContext(NumberContext);

  return (
    <div class="m1 component-use-context">
      <h2 className="mk component-name">Context Button</h2>
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
    <NumberContext.Consumer>
      {(value) => <p className="p1">{value} times clicked.</p>}
    </NumberContext.Consumer>
  );
}

ReactDOM.render(<ContextCounter />, document.querySelector("#root"));
