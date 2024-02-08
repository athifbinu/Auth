import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Navigate to="home" />} />
         <Route path="home" element={<Home />} />
         <Route path="login" element={<Login/>} />
         <Route path="signup" element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default Routers;
