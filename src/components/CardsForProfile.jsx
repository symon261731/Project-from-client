import React from 'react';
import OneCardForProfile from './OneCardForProfile';

export default function CardsForProfile({ trash }) {
  return (
    <div style={{ display: 'flex' }}>
      {trash?.map((el) => <OneCardForProfile key={el.id} oneCard={el} />)}
    </div>
  );
}
