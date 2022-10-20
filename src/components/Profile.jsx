import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile({ user, filterCards }) {
  console.log(user);
  return (
    <div className="container">
      <div className="profile">
        <h5 className="card-title">Профиль</h5>
        <ul>
          <li>
            <p>
              Имя:
              {' '}
              {user.firstname || null}
            </p>
          </li>
          <li>
            <p>
              Email:
              {' '}
              {user.email || null}
            </p>
          </li>
          <li>
            <p>
              Город:
              {' '}
              {user.city || null}
            </p>
          </li>
          <li>
            <p>
              Телефон:
              {' '}
              {user.phone || null}
            </p>
          </li>
        </ul>
        <Link to="/" className="card-link">Изменить профиль</Link>
      </div>
      <div className="cards">
        {filterCards || null}
      </div>
    </div>
  );
}
