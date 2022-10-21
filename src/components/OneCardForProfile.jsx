import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import MyModal from './MyModal';

export default function OneCardForProfile({ oneCard }) {
  return (
    <div className="oneCard">
      <li className="card">
        <img src={oneCard.info.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{oneCard.info.name}</h5>
          <div className="priceTXT">
            <p className="card-text">
              Исходная цена:
              {' '}
              {`${oneCard.info.price.toFixed(2)} руб.`}
            </p>
            <div className="priceTXT1">
              <p className="card-text">
                Цена со скидкой:
                {' '}
                {`${(Number(oneCard.info.price - ((oneCard.info.price / 100) * oneCard.info.sale))).toFixed(2)}`}
              </p>
            </div>
            <div className="buttons">
              {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Подробнее
              </button> */}
              <Container>
                <Row>
                  <MyModal info={oneCard.info} />
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </li>

    </div>
  );
}
