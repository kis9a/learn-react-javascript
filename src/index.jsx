import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Counter from "./components/StateCounter";
import {
  EffectCounterClass,
  EffectCounterFunction,
} from "./components/EffectCounter";
import ContextCounter from "./components/ContextCounter";
import ReducerCounter from "./components/ReducerCounter";
import "./index.css";

function Hooks() {
  return (
    <div className="p1 flex hooks">
      <Counter />
      <EffectCounterClass />
      <EffectCounterFunction />
      <ContextCounter />
      <ReducerCounter />
      <style>
        {
          "\
        .hooks{\
          display: grid;\
          width: 90%;\
          grid-template-columns:  1fr 1fr 1fr;\
          grid-gap: 16px;\
        }\
      "
        }
      </style>
    </div>
  );
}

function Top() {
  return (
    <div>
      <div>Home, React.js</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="m0 header">
          <Link className="pl" to={"/"}>
            Home
          </Link>
          <Link className="pl" to={"/hooks"}>
            Hooks
          </Link>
        </div>
        <div className="content">
          <Switch>
            <Route path="/" component={Top} exact />
            <Route path="/hooks" component={Hooks} exact />
          </Switch>
        </div>
        <style>
          {
            "\
        .content{\
          display: flex;\
          justify-content: center;\
        }\
      "
          }
        </style>
      </React.StrictMode>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
