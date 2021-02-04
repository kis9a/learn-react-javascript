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
    <div>
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
        <div className="header m1">
          <Link className="pl" to={"/"}>
            Home
          </Link>
          <Link className="pl" to={"/hooks"}>
            Learn React hooks
          </Link>
        </div>
        <div className="m1">
          <Switch>
            <Route path="/" component={Top} exact />
            <Route path="/hooks" component={Hooks} exact />
          </Switch>
        </div>
      </React.StrictMode>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
