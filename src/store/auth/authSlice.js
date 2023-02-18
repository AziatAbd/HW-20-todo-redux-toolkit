import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthorized = true;
    },
    logout(state) {
      state.isAuthorized = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
