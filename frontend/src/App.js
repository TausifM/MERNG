import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Register from "./Pages/Register";
import MenuBar from "./components/Menubar";
function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
