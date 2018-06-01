import React from 'react';
import { Link } from 'react-router-dom';

export default ({ isAuthenticated }) => (
  <header id="header">
    <h1 id="title">My awesome website</h1>
    <ul id="links">
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/profile/1">Profile 1</Link>
      </li>
      <li>
        <Link to="/profile/2">Profile 2</Link>
      </li>
      {!isAuthenticated && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      )}
      <li>
        <Link to="/this-is-broken">Broken Page</Link>
      </li>
    </ul>
  </header>
);
