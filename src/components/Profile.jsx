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
      lastName: user?.lastname,
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
        <h5 className="card-title" style={{ fontSize: '20px', marginBottom: '5px' }}>Профиль</h5>
        <div className="text-center" style={{ marginBottom: '5px' }}>
          <img src={user?.avatar} className="rounded" alt="..." />
        </div>
        <ul>
          <li>
            {/* <p>Имя: </p>
            <textarea onChange={editData} disabled={edit} name="firstName" value={profile?.firstName} /> */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Имя: </span>
              <input type="text" onChange={editData} disabled={edit} name="firstName" value={profile?.firstName} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
          </li>
          <li>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Фамилия: </span>
              <input type="text" onChange={editData} disabled={edit} name="lastName" value={profile?.lastName} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
          </li>
          <li>
            {/* <p>
              Email:
              {' '}
              {user.email || null}
            </p> */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Email: </span>
              <input type="text" value={user.email} disabled="true" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
          </li>
          <li>
            {/* <p>Город: </p>
            <textarea onChange={editData} disabled={edit} name="city" value={profile?.city} /> */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Город: </span>
              <input type="text" onChange={editData} disabled={edit} name="city" value={profile?.city} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
          </li>
          <li>
            {/* <p>Телефон: </p>
            <textarea onChange={editData} disabled={edit} name="phone" value={profile?.phone} /> */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Телефон: </span>
              <input type="text" onChange={editData} disabled={edit} name="firstName" value={profile?.phone} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
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
