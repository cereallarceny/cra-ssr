import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/',
    text: 'Homepage'
  },
  {
    to: '/about',
    text: 'About'
  },
  {
    to: '/profile/1',
    text: 'Profile 1'
  },
  {
    to: '/profile/2',
    text: 'Profile 2'
  },
  {
    to: '/login',
    text: 'Login',
    auth: false
  },
  {
    to: '/dashboard',
    text: 'Dashboard',
    auth: true
  },
  {
    to: '/logout',
    text: 'Logout',
    auth: true
  },
  {
    to: '/this-is-broken',
    text: 'Broken Page'
  }
];

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true;
  } else if (to !== '/' && current.includes(to)) {
    return true;
  }

  return false;
};

const HeaderLink = ({ to, text, current }) => (
  <li className={isCurrent(to, current) ? 'current' : ''}>
    <Link to={to}>{text}</Link>
  </li>
);

export default ({ isAuthenticated, current }) => (
  <header id="header">
    <h1 id="title">My awesome website</h1>
    <ul id="links">
      {links.map((link, index) => {
        const TheLink = <HeaderLink key={index} current={current} {...link} />;

        if (link.hasOwnProperty('auth')) {
          if (link.auth && isAuthenticated) {
            return TheLink;
          } else if (!link.auth && !isAuthenticated) {
            return TheLink;
          }

          return null;
        }

        return TheLink;
      })}
    </ul>
  </header>
);
