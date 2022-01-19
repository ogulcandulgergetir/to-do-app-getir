import React from "react";
import "./Todo.css";

function Todo({ todo, index, toggleTodo }) {
  return (
    <div
      className="todo"
      style={{ backgroundColor: todo.completed ? "rgb(143, 143, 143)" : "rgb(224, 214, 231)",
               color: todo.completed ? "rgb(90, 90, 90)" : "" }}
    >
      {todo.title}
      <div>
      {!todo.completed 
        ? <button onClick={() => toggleTodo(index)}>Complete The Task</button>
        : <button onClick={() => toggleTodo(index)}>Uncomplete</button>
      }
      </div>
    </div>
  );
}

export default Todo;