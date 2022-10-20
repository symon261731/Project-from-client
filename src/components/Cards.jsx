import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({ info }) {
  // const [list, setList] = useState(info || []);
  const [calendarValue, onChangeCalendar] = useState(new Date());
  // useEffect(() => {
  //   const data = fetch('/home', () => {
  //     setList(data);
  //   });
  // }, []);
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
