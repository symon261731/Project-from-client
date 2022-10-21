import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Navbar from './Navbar';
import Reg from './registration/Reg';
import Auth from './registration/Auth';
import Profile from './Profile';

export default function App({ productDB, userBack, trush }) {
  const [trash, setTrash] = useState([]);
  console.log(trash);
  const [user, setUser] = useState(userBack);
  // console.log('FROM BACK', userBack);
  const [cards, setCards] = useState(productDB || []);

  useEffect(() => {
    fetch('/home').then((data) => data.json().then((result) => setCards(result.productDB)));
    fetch('/api/auth').then((data) => data.json().then((result) => setUser(result)));
  }, []);

  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Cards setTrash={setTrash} trash={trash} user={user} info={cards} />} />
        <Route path="/reg" element={<Reg setUser={setUser} />} />
        <Route path="/auth" element={<Auth user={user} setUser={setUser} />} />
        <Route path="/profile" element={<Profile trash={trash} user={user} />} />
      </Routes>
    </div>
  );
}
