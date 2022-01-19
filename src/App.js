import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./App.css";
import Todo from './components/Todo/Todo'
import TodoForm from './components/TodoForm/TodoForm'
import { fetchTodoItem, addTodoItem, toggleTodoItem } from "./store/actions/todoItem";


function App() {
  const todoItems = useSelector(state => state.todoItem.todoItem);
  console.log(todoItems)
  const dispatch = useDispatch();

  const [todos, setTodos] = React.useState([
    // {
    //   text: "Learn about React",
    //   isCompleted: false
    // },
    // {
    //   text: "Meet friend for lunch",
    //   isCompleted: false
    // },
    // {
    //   text: "Build really cool todo app",
    //   isCompleted: false
    // }
  ]);

  useEffect(() => {
    dispatch(fetchTodoItem());
  }, []);

  const addTodo = text => {
    dispatch(addTodoItem(text, todoItems[todoItems.length - 1]['id']));

  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todoItems.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={() => dispatch(toggleTodoItem(todo.id))}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;