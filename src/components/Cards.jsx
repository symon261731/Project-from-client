import React from 'react';
import OneCard from './OneCard';

export default function Cards({ info }) {
  return (
    <ul>
      <li>Сервер Работает</li>
      {/* {info?.map((el) => <OneCard key={el.id} info={el} />)} */}
    </ul>
  );
}
