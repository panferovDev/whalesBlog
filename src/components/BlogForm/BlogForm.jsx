import React, { useState } from 'react';

export default function BlogForm({ setCurPosts, user }) {
  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input?.title?.trim() && input?.body?.trim()) {
      fetch('/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(input),
      })
        .then((res) => res.json())
        .then((res) => {
          setCurPosts((prev) => [{...res, User:{...user}}, ...prev]);
          setInput({});
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <form onSubmit={submitHandler}>
          <div className="mb-2 myLabel">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              onChange={inputHandler}
              value={input.title || ''}
              type="text"
              name="title"
              className="form-control flatinput"
              id="title"
              placeholder="..."
            />
          </div>
          <div className="mb-2 myLabel">
            <label htmlFor="body" className="form-label">Body</label>
            <input
              onChange={inputHandler}
              value={input.body || ''}
              type="text"
              name="body"
              className="form-control flatinput"
              id="body"
              placeholder="..."
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-outline-primary ">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
