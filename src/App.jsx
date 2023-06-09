import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Header, Footer } from "./components/Index";
//pages
import { Home, Contact, Login, Register, Reset } from "./pages/Index";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
