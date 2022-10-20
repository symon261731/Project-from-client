import React, { useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({ info, user }) {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  // console.log(showTime);
  const { length } = info;
  const getThree = () => {
    const res = Math.floor(Math.random() * length);
  };
  const dich = [
    info[Math.floor(Math.random() * length)],
    info[Math.floor(Math.random() * length)],
    info[Math.floor(Math.random() * length)],
  ];
  return (
    <>
      {showTime ? (
        <h2>Товары недели</h2>
      ) : null}
      <div className="calendar__container" style={{ display: 'flex' }}>
        {showTime ? (
          dich?.map((el) => <OneCard key={el.id} info={el} user={user} />)
        ) : null}
        <Calendar className="calendar" onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
      </div>
      <ul style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '25px',
      }}
      >
        {info?.map((el) => <OneCard key={el.id} info={el} user={user} />)}
      </ul>
    </>
  );
}
