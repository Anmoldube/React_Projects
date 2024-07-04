import React, { useState } from "react";
import Home from "./components/Home";
// import { json } from "react-router";
import { Link, Route, Routes } from "react-router-dom";
import Userdetails from "./components/Userdetails";
import User from "./components/User";
import About from "./components/About.jsx";

function App() {
  return (
    <div className="bg-slate-700 justify-center items-center  w-full h-[100vh]">
      <nav className="text-yellow-300 flex justify-center p-4">
        <Link to="/" className="mt-1 m-7">
          Home
        </Link>
        <Link to="/user" className="mt-1 m-7">
          User
        </Link>
        <Link to="/About" className="mt-1 m-7">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
