import { createStore, combineReducers } from "redux";
import { todos, visibilityFilter } from "./reducers/todo";

const rootReducer = combineReducers({ todos, visibilityFilter });

const storeTodo = createStore(rootReducer);

export default storeTodo;
