import React from 'react';

export default function OneCard({ info, user }) {
  // const onClickHandler = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/trush', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(info),
  //   });
  // };
  console.log(user);
  return (
    <div className="oneCard">
      <li className="card" style={{ borderRadius: '20px' }}>
        <img src={info.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{info.name}</h5>
        </div>
        <div className="priceTXT">
          <div className="pipi">
            <p className="card-text">
              Исходная цена:
              {' '}
              {`${info.price.toFixed(2)} руб.`}
            </p>

            <div className="priceTXT1">
              <p className="card-text">
                Цена со скидкой:
                {' '}
                {`${(Number(info.price - ((info.price / 100) * info.sale))).toFixed(2)} руб.`}
              </p>
            </div>

          </div>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Подробнее
          </button>
          {user ? (
            <>
              <button type="button" className="btn btn-outline-primary">Купить</button>
            </>
          ) : null}
        </div>
      </li>

    </div>
  );
}
