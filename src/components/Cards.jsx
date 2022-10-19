import React from 'react';
import OneCard from './OneCard';

export default function Cards({ info }) {
  return (
    <ul style={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '25px',
    }}
    >
      {info?.map((el) => <OneCard key={el.id} info={el} />)}
    </ul>
  );
}
