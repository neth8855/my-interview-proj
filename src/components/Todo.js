import React from "react";

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const handleCheckboxClick = () => {
    completeTodo(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div style={{ display: "center" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={handleCheckboxClick}
      />
      <b>
        {todo.task} {todo.completed && <b> - Done!</b>}
      </b>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
};

export default Todo;
