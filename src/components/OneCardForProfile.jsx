import React from 'react';

export default function OneCardForProfile({ oneCard }) {
  return (
    <div className="oneCard">
      <li className="card">
        <img src={oneCard.info.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{oneCard.name}</h5>
          <div className="priceTXT">
            <p className="card-text">
              Исходная цена:
              {' '}
              {oneCard.info.price}
            </p>
            <div className="priceTXT1">
              <p className="card-text">
                Цена со скидкой:
                {' '}
                {Number(oneCard.price - ((oneCard.price / 100) * oneCard.sale))}
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </li>

    </div>
  );
}
