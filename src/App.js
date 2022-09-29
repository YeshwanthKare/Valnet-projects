import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import Projecttask from "./components/Projecttask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/projects" />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/projects/:projectId" element={<Projecttask />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
