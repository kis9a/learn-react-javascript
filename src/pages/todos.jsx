import React from "react";
// import AddTodo from "../components/todos/AddTodo";
// import Mbox from "../components/mbox/Mbox";
import { SimpleTodo, SimpleTodo2 } from "../components/todos/SimpleTodo";

// const getVisibleTodos = (todos, filter) => {
// import TodoList from "../components/todos/TodoList.jsx";
// import { connect } from "react-redux";
// import { toggleTodo, setVisibilityFilter } from "../store/actions/todo";

//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos;
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter((t) => t.completed);
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter((t) => !t.completed);
//     default:
//       throw new Error("Unknown filter: " + filter);
//   }
// };

// const mapStateToProps = (state) => ({
//   todos: getVisibleTodos(state.todos, state.setVisibilityFilter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   toggleTodo: (id) => dispatch(toggleTodo(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

function Todos() {
  return (
    <div>
      <SimpleTodo2 />
    </div>
  );
}

export default Todos;
