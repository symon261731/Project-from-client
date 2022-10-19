import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Navbar from './Navbar';
import Reg from './registration/Reg';

export default function App({ productDB, user }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div className="container">
      <Navbar user={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Cards info={productDB} />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
    </div>
  );
}
