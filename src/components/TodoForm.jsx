import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { logout } from "../store/auth/authSlice";
import { addTodo, clearTodo } from "../store/todo/todoSlice";
import TodoList from "./TodoList";

const TodoForm = () => {
  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state);

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: inputValue,
      id: v4(),
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  const removeAllTodo = () => {
    dispatch(clearTodo());
  };

  const onLogout = () => {
    dispatch(logout() && clearTodo());
    navigate("/login");
  };

  return (
    <div>
      <button onClick={onLogout}>logout</button>
      <form onSubmit={submitHandler}>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button type="submit" disabled={!inputValue}>
          add
        </button>
      </form>
      <button onClick={removeAllTodo}>clear</button>
      <ul>
        {todo.map((item) => (
          <TodoList key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
