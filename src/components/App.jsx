import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
// import Home from './Home';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Reg setUser={setCurrentUser} />} />
      </Routes> */}
    </div>
  );
}
