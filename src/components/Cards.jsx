import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({ info, user }) {
  // const [list, setList] = useState(info || []);
  const [calendarValue, onChangeCalendar] = useState(new Date());
  // useEffect(async () => {
  //   const response = await fetch('/home', () => {
  //   });
  //   const data = await response.json();
  //   setList(data);
  // }, []);
  // console.log(list);

  return (
    <>
      <ul style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '25px',
      }}
      >
        {/* {list.productDB?.map((el) => <OneCard key={el.id} info={el} />)} */}
        {info?.map((el) => <OneCard key={el.id} info={el} />)}
      </ul>
      <Calendar className="calendar" onChange={onChangeCalendar} value={calendarValue} />
    </>
  );
}
