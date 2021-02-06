import React from "react";
import ReactDOM from "react-dom";
import storeTodo from "./store/todo";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Hooks from "./pages/hooks";
import Todos from "./pages/todos";
// [vite] Internal server error: unknown: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (8:3):
// import MboxP from "./pages/mobx";
import "normalize.css";
import "./index.css";

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
          <Link className="pl" to={"/todos"}>
            Todos
          </Link>
          //{" "}
        </div>
        <div className="content">
          <Switch>
            <Route path="/" component={Top} exact />
            <Route path="/hooks" component={Hooks} exact />
            <Route path="/todos" component={Todos} exact />
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
    <Provider store={storeTodo}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
