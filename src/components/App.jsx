import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/reg" element={<Reg setUser={setCurrentUser} />} />
      </Routes> */}
    </div>
  );
}
