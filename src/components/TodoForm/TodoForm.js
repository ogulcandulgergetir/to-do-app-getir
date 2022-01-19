import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span style={{ 'padding': "1rem", 'fontSize': "13px" }}>Add items to do list:</span>  
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input style={{ 'marginLeft': "0.5rem" }} type="submit" value="Add Item" />
    </form>
  );
}

export default TodoForm;