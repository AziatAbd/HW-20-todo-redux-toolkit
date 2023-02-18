import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },

    deleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    completeTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },

    editTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.title = action.payload.title;
      console.log(action);
    },
    clearTodo(state, action) {
      return [];
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo, deleteTodo, completeTodo, editTodo, clearTodo } =
  todoSlice.actions;
