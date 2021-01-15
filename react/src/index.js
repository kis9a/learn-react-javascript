import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/StateCounter";
import {
  EffectCounterClass,
  EffectCounterFunction,
} from "./components/EffectCounter";
import ContextCounter from "./components/ContextCounter";
import ReducerCounter from "./components/ReducerCounter";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="flex">
      <Counter />
    </div>
    <hr />
    <div className="flex">
      <EffectCounterClass />
      <EffectCounterFunction />
    </div>
    <hr />
    <ContextCounter />
    <hr />
    <ReducerCounter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
