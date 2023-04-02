import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Other from "./pages/Other";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
