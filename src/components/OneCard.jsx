import React from 'react';

export default function OneCard({ info, user }) {
  return (
    <li className="card" style={{ width: '18rem' }}>
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
          {Number(info.price - ((info.price / 100) * info.sale))}
        </p>
        <div className="buttons">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Подробнее
          </button>
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
          {/* {!user && (
        <>
          <button type="submit" className="btn btn-primary" hidden>Купить</button>
        </>
        )} */}
          {user && (
          <>
            <button type="submit" className="btn btn-primary">Купить</button>
          </>
          )}
        </div>
      </div>
    </li>
  );
}
