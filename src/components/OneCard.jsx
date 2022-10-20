import React from 'react';

export default function OneCard({ info, user }) {
  const onClickHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/trush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
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
            </div>
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            </div> */}
            {user && (
            <>
              <button onClick={onClickHandler} type="button" className="btn btn-primary">Купить</button>
            </>
            )}
          </div>
        </div>
      </li>

    </div>
  );
}
