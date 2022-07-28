import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span>Whales blog</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>

              {user
                ? (
                  <>
                    <li className="nav-item">
                      <span className="nav-link">
                        Привет,
                        {' '}
                        {user.name}
                        {' '}
                        !
                      </span>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/user/logout" tabIndex="-1" aria-disabled="true">Выход</a>
                    </li>
                  </>
                )
                : (
                  <>
                    <li className="nav-item align-self-end">
                      <NavLink className="nav-link" to="/user/signin" tabIndex="-1">signin</NavLink>
                    </li>
                    <li className="nav-item align-self-end">
                      <NavLink className="nav-link end-0" to="/user/signup" tabIndex="-1">signup</NavLink>
                    </li>
                  </>
                )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
