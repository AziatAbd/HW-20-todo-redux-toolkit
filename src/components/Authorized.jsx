import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/auth/authSlice";

const Authorized = () => {
  const dispatch = useDispatch();

  const { isAuthorized } = useSelector((state) => state.auth);

  console.log(isAuthorized);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email.includes("@") && password.length > 4) {
      dispatch(login({ email: email, password: password }));
      navigate("/todos");
    }
  };

  return (
    <>
      <form onSubmit={onLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
    </>
  );
};

export default Authorized;
