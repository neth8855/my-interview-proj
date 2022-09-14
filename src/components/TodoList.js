import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
