import React, { useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({ info, user }) {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  // console.log(showTime);
  const { length } = info;

  const range = info.map((el) => el.id);
  const randomNumber = () => {
    const stack = [];
    while (stack.length <= 2) {
      const index = (Math.random() * range.length);
      const item = range.splice(index, 1)[0];
      stack.push(item);
    }
    return stack;
  };
  const dich = randomNumber();
  const some = [
    info[dich[0]],
    info[dich[1]],
    info[dich[2]],
  ];
  // const dich = [
  //   info[Math.floor(Math.random() * length)],
  //   info[Math.floor(Math.random() * length)],
  //   info[Math.floor(Math.random() * length)],
  // ];
  return (
    <>
      {showTime ? (
        <h2>Товары недели</h2>
      ) : null}
      <div className="calendar__container" style={{ display: 'flex' }}>
        {showTime ? (
          some?.map((el) => <OneCard key={el.id} info={el} user={user} />)
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
