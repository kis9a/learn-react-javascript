import React, { useEffect } from "react";
import TodosRemaining from "./TodosRemaining";
import TodoItem from "./TodoItem";
import TodosCheckAll from "./TodosCheckAll";
import TodosFiltered from "./TodosFiltered";
import TodosClearCompleted from "./TodosClearCompleted";
import { inject, observer } from "mobx-react";

const Mbox = inject("TodoStore")(
  observer((props) => {
    const TodoStore = this.props.TodoStore;

    useEffect(() => {
      props.TodoStore.retrieveTodos();
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Todo-container">
          <input
            type="text"
            className="todo-input"
            placeholder="What needs to be done"
            ref={TodoStore.todoInput}
            onKeyUp={TodoStore.addTodo}
          />

          {TodoStore.todosFiltered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}

          <div className="extra-container">
            <TodosCheckAll />
            <TodosRemaining />
          </div>

          <div className="extra-container">
            <TodosFiltered />

            {TodoStore.todosCompletedCount > 0 && <TodosClearCompleted />}
          </div>
        </div>{" "}
        {/* End Todo-Container */}
      </div>
    );
  })
);

export default Mbox;
