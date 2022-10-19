import React, { useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({ info }) {
  const [calendarValue, onChangeCalendar] = useState(new Date());
  return (
    <>
      <ul style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '25px',
      }}
      >
        {info?.map((el) => <OneCard key={el.id} info={el} />)}
      </ul>
      <Calendar className="calendar" onChange={onChangeCalendar} value={calendarValue} />
    </>
  );
}
