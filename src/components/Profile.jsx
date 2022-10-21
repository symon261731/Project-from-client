import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsForProfile from './CardsForProfile';
// import { Link } from 'react-router-dom';

export default function Profile({ user, trash }) {
  // const [firstName, setFirstName] = useState(user.firstname || '');
  // const [city, setCity] = useState(user.city || '');
  // const [phone, setPhone] = useState(user.phone || '');
  const [edit, setEdit] = useState(true);

  const [profile, setProfile] = useState(
    {
      firstName: user?.firstname,
      city: user?.city,
      phone: user?.phone,
    },
  );

  async function editHandler() {
    setEdit(false);
  }

  function editData(e) {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function sendEdit() {
    setEdit(true);
    try {
      const response = await fetch(`/profile/${user.id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ profile }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container" style={{ display: 'flex' }}>
      <div className="profile">
        <h5 className="card-title">Профиль</h5>
        <ul>
          <li>
            <p>Имя: </p>
            <textarea onChange={editData} disabled={edit} name="firstName" value={profile?.firstName} />
          </li>
          <li>
            <p>
              Email:
              {' '}
              {user.email || null}
            </p>
          </li>
          <li>
            <p>Город: </p>
            <textarea onChange={editData} disabled={edit} name="city" value={profile?.city} />
          </li>
          <li>
            <p>Телефон: </p>
            <textarea onChange={editData} disabled={edit} name="phone" value={profile?.phone} />
          </li>
        </ul>
        <button type="button" className="btn btn-info" onClick={editHandler} style={{ marginRight: '5px' }}>Изменить профиль</button>
        <button type="button" className="btn btn-info" onClick={sendEdit}>Принять изменения</button>
      </div>
      <div className="cards">
        <CardsForProfile trash={trash} />
      </div>
    </div>
  );
}
