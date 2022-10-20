import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Navbar from './Navbar';
import Reg from './registration/Reg';
import Auth from './registration/Auth';
import Profile from './Profile';

export default function App({ productDB }) {
  const [user, setUser] = useState(null);
  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} />
      <span>{user}</span>
      <Routes>
        <Route path="/" element={<Cards info={productDB} />} />
        <Route path="/reg" element={<Reg setUser={setUser} />} />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}
