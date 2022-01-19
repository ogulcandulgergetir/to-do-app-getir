import React from "react";
import "./Todo.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ backgroundColor: todo.completed ? "rgb(143, 143, 143)" : "rgb(224, 214, 231)",
               color: todo.completed ? "rgb(90, 90, 90)" : "" }}
    >
      {todo.title}
      <div>
      {!todo.completed 
        ? <button onClick={() => completeTodo(index)}>Complete The Task</button>
        : <button onClick={() => completeTodo(index)}>Uncomplete</button>
      }
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;