import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Register from "./pages/Register";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
