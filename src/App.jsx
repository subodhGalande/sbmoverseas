import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products"></Route>
        <Route path="/Contact"></Route>
      </Routes>
    </div>
  );
}

export default App;
