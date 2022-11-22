import React from 'react';
import Login from './pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';

const Unauthonticated = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
};

export default Unauthonticated;