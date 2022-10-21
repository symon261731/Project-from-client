import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import MyModal from './MyModal';

export default function OneCard({ info, user, setTrash }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    setTrash((prev) => [...prev, { info }]);
  };
  console.log(user);
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
              {`${info.price.toFixed(2)} руб.`}
            </p>
            <div className="priceTXT1">
              <p className="card-text">
                Цена со скидкой:
                {' '}
                {`${(Number(info.price - ((info.price / 100) * info.sale))).toFixed(2)} руб.`}
              </p>
            </div>
            <div className="buttons">
              <Container>
                <Row>
                  <MyModal info={info} />
                </Row>
              </Container>
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
