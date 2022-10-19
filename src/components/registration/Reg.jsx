import React from 'react';

export default function Reg() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">login</label>
        <input type="name" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Telephone</label>
        <input type="tel" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          City
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
