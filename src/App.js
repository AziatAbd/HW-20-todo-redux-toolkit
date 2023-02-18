import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./page/AuthPage";
import TodoPage from "./page/TodoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
