import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Todo from './components/Todo/Todo'
import TodoForm from './components/TodoForm/TodoForm'
import { fetchTodoItem, addTodoItem, toggleTodoItem } from "./store/actions/todoItem";


function App() {
  const todoItems = useSelector(state => state.todoItem.todoItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoItem());
  }, []);

  return (
    <div className="app">
      <div className="todo-list">
        {todoItems.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleTodo={() => dispatch(toggleTodoItem(todo.id))}
          />
        ))}
        <TodoForm addTodo={(text) => dispatch(addTodoItem(text, todoItems[todoItems.length - 1].id))} />
      </div>
    </div>
  );
}

export default App;