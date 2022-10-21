import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Navbar from './Navbar';
import Reg from './registration/Reg';
import Auth from './registration/Auth';
import Profile from './Profile';

export default function App({ productDB, userBack }) {
  const [user, setUser] = useState(userBack);
  console.log('FROM BACK', userBack);
  const [cards, setCards] = useState(productDB || []);

  useEffect(() => {
    fetch('/home').then((data) => data.json().then((result) => setCards(result.productDB)));
    fetch('/api/auth').then((data) => data.json().then((result) => setUser(result)));
  }, []);

  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} />
      <span>{user?.firstname}</span>
      <Routes>
        <Route path="/" element={<Cards info={cards} user={user} />} />
        <Route path="/reg" element={<Reg setUser={setUser} />} />
        <Route path="/auth" element={<Auth user={user} setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}
