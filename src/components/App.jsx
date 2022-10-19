import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
    </>
  );
}
