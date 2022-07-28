import React, { useState, useEffect } from 'react';
import BlogForm from '../BlogForm/BlogForm';
import CardItem from '../CardItem/CardItem';
import Logo from '../Logo/Logo';

export default function MainPage({ user, posts }) {
  const [curPosts, setCurPosts] = useState(posts);

  useEffect(() => {
    if (!curPosts) {
      fetch('/posts')
        .then((res) => res.json())
        .then((res) => setCurPosts(res))
        .catch((err) => console.log(err));
    }
  }, []);

  const deletePostHandler = (id) => {
    fetch(`/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },

    })
      .then(() => {
        setCurPosts((prev) => prev.filter((el) => el.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Logo />
      {user && <BlogForm setCurPosts={setCurPosts} user={user} />}
      {curPosts && curPosts.map((el, index) => (
        <CardItem
          key={el.id}
          post={el}
          user={user}
          index={index}
          deletePostHandler={deletePostHandler}
        />
      ))}
    </>
  );
}
