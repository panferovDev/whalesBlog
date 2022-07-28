import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignIn({ setCurUser }) {
  const [input, setInput] = useState({});

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input?.email?.trim() && input?.password?.trim()) {
      fetch('/user/signin', {
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
        <h2>Singn In</h2>
        <h2>Singn In</h2>
      </div>
      <div className="row mt-5">
        <motion.div className="col-md-4 offset-md-4" variants={variants} initial="hidden" animate="visible" custom={0.5}>
          <form onSubmit={submitHandler}>
            <div className="mb-2 mt-3 myLabel">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                value={input.email || ''}
                onChange={inputHandler}
                type="email"
                name="email"
                className="form-control flatinput"
                id="email"
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
              <button type="submit" className="btn btn-outline-primary ">Sign In</button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
