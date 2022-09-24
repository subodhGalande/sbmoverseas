import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Products from "./components/products";
import TurmericPowder from "./components/products/turmericPowder";
import BlackTurmeric from "./components/products/blackTurmeric";
import TurmericFinger from "./components/products/turmericFingers";
import About from "./components/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/turmericpowder" element={<TurmericPowder />}></Route>
        <Route path="/blackturmeric" element={<BlackTurmeric />}></Route>
        <Route path="/turmericfinger" element={<TurmericFinger />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
