import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import SingnUp from './SingnUp/SingnUp';
import SignIn from './SignIn/SignIn';
import MainPage from './MainPage/MainPage';
import AuthCheck from './AuthCheck/AuthCheck';

function App({ user, posts }) {
  const [curUser, setCurUser] = useState(user);
  return (
    <div className="container">
      <NavBar user={curUser} />
      <Routes>
        <Route path="/" element={<MainPage user={curUser} posts={posts} />} />
        <Route
          path="/user/signin"
          element={(
            <AuthCheck user={curUser}>
              <SignIn setCurUser={setCurUser} />
            </AuthCheck>
        )}
        />
        <Route
          path="/user/signup"
          element={(
            <AuthCheck user={curUser}>
              <SingnUp setCurUser={setCurUser} />
            </AuthCheck>
        )}
        />
      </Routes>

    </div>
  );
}

export default App;
