import React from "react";
import { Routes,Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Labours from "./pages/Labours";
import Contractors from "./pages/Contractors";
import Suppliers from "./pages/Suppliers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuthPage from "./components/Authpage";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/labours" element={<Labours/>}/>
        <Route path="/contractors" element={<Contractors/>}/>
        <Route path="/suppliers" element={<Suppliers/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
       {/* SINGLE AUTH ROUTE */}
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
