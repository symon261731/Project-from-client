import React, { useState } from 'react';
import Calendar from 'react-calendar';
import OneCard from './OneCard';

export default function Cards({ info, user }) {
  console.log(user);
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

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
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
