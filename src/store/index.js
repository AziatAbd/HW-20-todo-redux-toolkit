import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, authSlice } from "./auth/authSlice";
import { todoReducer, todoSlice } from "./todo/todoSlice";

const rootReducer = combineReducers({
  [todoSlice.name]: todoReducer,
  [authSlice.name]: authReducer,
});

export const store = configureStore({ reducer: rootReducer });
