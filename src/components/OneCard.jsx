import React from 'react';

export default function OneCard({
  info, user, trash, setTrash,
}) {
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
  const onClickHandler = (e) => {
    e.preventDefault();
    setTrash((prev) => [...prev, { info }]);
  };
  return (
    <div className="oneCard">
      <li className="card">
        <img src={info.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{info.name}</h5>
          <div className="priceTXT">
            <p className="card-text">
              Исходная цена:
              {' '}
              {info.price}
            </p>
            <div className="priceTXT1">
              <p className="card-text">
                Цена со скидкой:
                {' '}
                {Number(info.price - ((info.price / 100) * info.sale))}
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Подробнее
              </button>
              {user ? (
                <>
                  <button onClick={onClickHandler} type="button" className="btn btn-primary">Купить</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </li>

    </div>
  );
}
