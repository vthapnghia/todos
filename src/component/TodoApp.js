import React, { useEffect, useState } from "react";
import {v4} from "uuid"
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import Header from "./layout/Header";
import "../App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { todoService } from "../services/todoService";
import Footer from "./layout/Footer";
import {changeLoading} from "../redux/loading"

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const handleCheckboxChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      setTodos(
        todos.filter((todos) => {
          return todos.id !== id;
        })
      );
    })
  };

  const addTodo = (title) => {
    const todo = { id: v4(), title:title, completed:false};
    axios.post("https://jsonplaceholder.typicode.com/todos", todo)
    .then(res => {
      setTodos(pre => [...pre, res.data]);
    })
  };

  useEffect(() => {
    const callApi = async () => {
        setTodos(await todoService())
        dispatch(changeLoading());
    }
    callApi()
        
  }, [dispatch])
  console.log("render")
  return (
    <div className="container">
      <Header />
      <AddTodo  addTodo={addTodo}/>
      <Todos
        todos={todos}
        handleChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
      />
      <Footer/>
    </div>
  );
}

export default TodoApp;
