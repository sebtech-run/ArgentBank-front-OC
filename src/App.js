import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Index from './pages/home/index';
import Login from './pages/login/login';
import ProfileUser from './pages/user/profileUser';
import Error from './pages/error/error';

import Nav from './components/navigation/nav';



function App() {

  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <>
     
       
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={isConnected ? <ProfileUser /> : <Navigate to="/login" />} />
          <Route path='*' element={<Error />} />
        </Routes>
        
     
    </>
  );
}

export default App;
