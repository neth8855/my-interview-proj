import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...todo, id: new Date().toString() });
    setTodo({ ...todo, task: "" });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="Input task to do here.."
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Add New</button>
    </form>
  );
};

export default TodoForm;
