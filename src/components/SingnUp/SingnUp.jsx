import React, { useState } from 'react';

export default function SingnUp({ setCurUser }) {
  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input?.name?.trim() && input?.email?.trim() && input?.password?.trim()) {
      fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(input),
      })
        .then((res) => res.json())
        .then((res) => setCurUser(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="text-center logo mt-3">
        <h2>Singn Up</h2>
        <h2>Singn Up</h2>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={submitHandler}>
            <div className="mb-2 mt-3 myLabel">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                onChange={inputHandler}
                value={input.email || ''}
                type="email"
                name="email"
                className="form-control flatinput"
                id="email"
                placeholder="..."
              />
            </div>
            <div className="mb-2 myLabel">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                onChange={inputHandler}
                value={input.name || ''}
                type="text"
                name="name"
                className="form-control flatinput"
                id="name"
                placeholder="..."
              />
            </div>
            <div className="mb-2 myLabel">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                onChange={inputHandler}
                value={input.password || ''}
                type="password"
                name="password"
                className="form-control flatinput"
                id="body"
                placeholder="..."
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-outline-primary ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
