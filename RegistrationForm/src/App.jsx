import React from 'react';
import Login from './component/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './component/SignUp';
import UserInfo from './component/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
