import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/StateCounter";
import {
  EffectButtonClass,
  EffectButtonFunction,
} from "./components/EffectButton.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="flex">
      <Counter />
    </div>
    <hr />
    <div className="flex">
      <EffectButtonClass />
      <EffectButtonFunction />
    </div>
    <hr />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
