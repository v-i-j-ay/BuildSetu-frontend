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


import ProtectedRoute from "./components/ProtectedRoute"; //verify pages
import { AuthProvider } from "./context/AuthContext";     //global data


function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {/* 🔒 PROTECTED ROUTES */}
        <Route path="/labours" element={<ProtectedRoute><Labours/></ProtectedRoute>}/>
        <Route path="/contractors" element={ <ProtectedRoute><Contractors/></ProtectedRoute>}/>
        <Route path="/suppliers" element={<ProtectedRoute><Suppliers/></ProtectedRoute>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>

        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </>
  );
}

export default App;
