import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendar from 'react-calendar';
import Cards from './Cards';
import Navbar from './Navbar';
import Reg from './registration/Reg';
import Auth from './registration/Auth';

export default function App({ productDB, user }) {
  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div className="container">
      <Navbar user={currentUser} setUser={setCurrentUser} />
      <span>{currentUser}</span>
      <Routes>
        <Route path="/" element={<Cards info={productDB} />} />
        <Route path="/reg" element={<Reg setCurrentUser={setCurrentUser} />} />
        <Route path="/auth" element={<Auth setCurrentUser={setCurrentUser} />} />
      </Routes>
      <Calendar className="calendar" onChange={onChangeCalendar} value={calendarValue} />
    </div>
  );
}
