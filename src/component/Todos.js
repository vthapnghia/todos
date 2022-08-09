import React from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux"
import Loading from './Loading'

function Todos(props) {
  const { todos, handleChange, deleteTodo } = props;
  const flag = useSelector((state) => state.loading.flag);
  return flag ? <Loading/> : (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChange={handleChange}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
