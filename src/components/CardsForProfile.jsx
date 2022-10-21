import React from 'react';
import OneCardForProfile from './OneCardForProfile';

export default function CardsForProfile({ trash }) {
  return (
    <>
      {trash?.map((el) => <OneCardForProfile key={el.id} oneCard={el} />)}
    </>
  );
}
