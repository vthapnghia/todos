import React from "react";

function TodoItem(props) {
  const { todo, handleChange, deleteTodo } = props;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <span className={`${todo.completed ? "completed" : null}`}>
        {todo.title}
      </span>
      <button className="btn-style" onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
