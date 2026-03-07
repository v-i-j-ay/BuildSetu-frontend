import React from "react";
import { Routes,Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Labours from "./pages/Labours";
import LabourRegister from "./pages/LabourRegister";
import Contractors from "./pages/Contractors";
import ContractorRegister from "./pages/ContractorRegister";
import Suppliers from "./pages/Suppliers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuthPage from "./components/Authpage";
import Profile from "./pages/Profile";

import ScrollToTop from "./components/ScrollToTop";

import ProtectedRoute from "./components/ProtectedRoute"; //verify pages
import { AuthProvider } from "./context/AuthContext";     //global data

import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <ScrollToTop/>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home/>}/>
          {/* 🔒 PROTECTED ROUTES */}
        <Route path="/labours" element={<ProtectedRoute><Labours/></ProtectedRoute>}/>
        <Route path="/contractors" element={ <ProtectedRoute><Contractors/></ProtectedRoute>}/>
        <Route path="/labours/register" element={<LabourRegister />} />
         <Route path="/contractor/register" element={<ContractorRegister />} />
        <Route path="/suppliers" element={<ProtectedRoute><Suppliers/></ProtectedRoute>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
        <Route path="/profile" element={ <ProtectedRoute>  <Profile /></ProtectedRoute> }/>
        <Route path="/admin"
            element={
              <AdminRoute>
                  <AdminDashboard />
               </AdminRoute>
              }
        />
        
        

        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </>
  );
}

export default App;
