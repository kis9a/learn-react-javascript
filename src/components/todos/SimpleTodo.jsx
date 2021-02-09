import React, { useState, useCallback, useEffect } from "react";

export class SimpleTodo extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  }

  onSubmit() {
    let todos = this.state.todos;
    let todo = this.state.todo;

    todos.push(todo);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="Todo">
        <form onSubmit={this.onSubmit}>
          <input
            vlaue={this.state.todo}
            type="text"
            name="todo"
            onChange={this.onInput}
          />
          <button onClick={this.onSubmit}>Submit</button>
          <p>{this.state.todo}</p>
        </form>

        {this.state.todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
    );
  }
}

export const SimpleTodo2 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onInput = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (todo.trim()) {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            content: todo,
            done: false,
          },
        ]);
      }
      setTodo("");
    },
    [todo, todos]
  );

  const onCheck = useCallback(
    (todo, index) => () => {
      let newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todos,
        done: !todo.done,
      });

      setTodos(newTodos);
    },
    [todos]
  );

  const onRemove = useCallback((todo) => () => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((value) => value !== todo);
    setTodos(newTodos);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" vlaue="{todo}" name="todo" onChange={onInput} />
        <button onClick={onSubmit}>Submit</button>
      </form>
      <div>
        {todos.map((todo, index) => {
          return (
            <li className="flex" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={onCheck(todo, index)}
              />
              <p className={["todo", todo.done ? "done" : ""]}>
                {todo.content}
              </p>
              <button onClick={onRemove(todo)}>remove</button>
            </li>
          );
        })}
      </div>
    </div>
  );
};
