import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reg({ setCurrentUser }) {
  const [input, setInput] = useState({
    login: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    city: '',
    avatar: '',
  });
  const changeHandler = async (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/reg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const newUserFromRouter = await response.json();
      setCurrentUser(newUserFromRouter);
      navigate('/');
    }
  };
  return (
    <form onSubmit={onSubmitHandler} action="/api/reg" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputLogin1" className="form-label">login</label>
        <input
          required
          onChange={changeHandler}
          value={input.login}
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
          onChange={changeHandler}
          value={input.email}
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
          onChange={changeHandler}
          value={input.password}
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
          onChange={changeHandler}
          value={input.firstname}
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
          onChange={changeHandler}
          value={input.lastname}
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
          onChange={changeHandler}
          value={input.phone}
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
            onChange={changeHandler}
            value={input.city}
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
            onChange={changeHandler}
            value={input.avatar}
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
