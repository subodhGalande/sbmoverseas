import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Products from "./components/products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
