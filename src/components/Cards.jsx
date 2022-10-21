import React, { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({
  info, user, trash, setTrash,
}) {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const range = info.map((el) => el.id);
  const randomNumber = () => {
    const stack = [];
    while (stack.length <= 2) {
      const index = Math.round(Math.random() * range.length);
      const item = range.splice(index, 1)[0];
      stack.push(item);
    }
    return stack;
  };
  // function randomNumber(min, max, count) {
  //   const arr = [];
  //   let elem = 0;
  //   for (let index = 0; index < count; index++) {
  //     elem = Math.round(Math.random() * (max - min)) + min;
  //     arr.push(elem);
  //   }
  //   return arr;
  // }

  // const dich = useMemo(() => randomNumber(), []);
  const dich = randomNumber(0, range.length, 3);
  const some = [
    info[dich[0]],
    info[dich[1]],
    info[dich[2]],

  ];
  console.log(some);
  return (
    <>
      {showTime ? (
        <h2 style={{ fontWeight: '700', fontSize: '35px' }}>
          Товары недели только для вас
          {' '}
          {user ? user.firstname : ''}
        </h2>
      ) : null}
      <div className="calendar__container" style={{ display: 'flex' }}>
        {showTime ? (
          some?.map((el) => <OneCard setTrash={setTrash} key={el.id} info={el} user={user} />)
        ) : null}
        <Calendar className="calendar" onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
      </div>
      <ul style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '25px',
      }}
      >
        {info?.map((el) => <OneCard trash={trash} setTrash={setTrash} key={el.id} info={el} user={user} />)}
      </ul>
    </>
  );
}
