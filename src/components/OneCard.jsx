import React from 'react';

export default function OneCard({ info }) {
  return (
    <a className="card" style={{ width: '18rem' }} href="#">
      <img src={info.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <p className="card-text">
          Исходная цена:
          {' '}
          {info.price}
        </p>
        <p className="card-text">
          Цена со скидкой:
          {' '}
          {info.fixPrice}
        </p>
        <button type="submit" className="btn btn-primary">Купить</button>
      </div>
    </a>
  );
}
