import Home from "../pages/Home.jsx";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
const AppRoutes = () => {
    return (
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
      </Routes>
    );
  };
  
  export default AppRoutes;