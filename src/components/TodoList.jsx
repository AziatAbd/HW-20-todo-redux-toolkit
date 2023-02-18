import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { completeTodo, deleteTodo, editTodo } from "../store/todo/todoSlice";

const TodoList = ({ item }) => {
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState("");
  const [edit, setEdit] = useState(false);

  const removeHadnler = () => {
    dispatch(deleteTodo(item.id));
  };

  const toggleTodo = () => {
    dispatch(completeTodo(item.id));
  };
  const saveTodoHandler = () => {
    dispatch(editTodo({ id: item.id, title: editValue }));
    setEdit(false);
  };
  const editHandler = () => {
    setEdit(true);
    setEditValue(item.title);
  };

  return (
    <div>
      <li>
        {edit ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={saveTodoHandler}>save</button>
          </>
        ) : (
          <>
            <StyledTitle done={item.completed}>{item.title}</StyledTitle>
            <button onClick={removeHadnler}>delete</button>
            <button onClick={toggleTodo}>complete</button>
            <button onClick={editHandler}>edit</button>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoList;

const StyledTitle = styled.p`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
`;
