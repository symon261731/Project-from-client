import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reg({ setCurrentUser }) {
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      const data = await response.json();
      setCurrentUser(data);
      navigate('/');
    }
  };
  return (
    <form onSubmit={onSubmitHandler} action="/api/reg" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputLogin1" className="form-label">login</label>
        <input
          required
          name="login"
          type="name"
          className="form-control"
          id="exampleInputLogin1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          required
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          required
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputFirstName1" className="form-label">Имя</label>
        <input
          required
          name="firstname"
          type="text"
          className="form-control"
          id="exampleInputFirstName1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputLastName1" className="form-label">Фамилия</label>
        <input
          required
          name="lastname"
          type="text"
          className="form-control"
          id="exampleInputLastname1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTel1" className="form-label">Telephone</label>
        <input
          required
          name="phone"
          type="tel"
          className="form-control"
          id="exampleInputTel1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputCity1" className="form-label">
          City
          <input
            required
            name="city"
            type="text"
            className="form-control"
            id="exampleInputCity1"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAvatar1" className="form-label">
          avatar
          <input
            name="avatar"
            type="text"
            className="form-control"
            id="exampleInputAvatar1"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
