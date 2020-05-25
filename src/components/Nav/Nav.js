import React from 'react';
import './Nav.css';

const placeholder = '';

const Nav = () => {
  return (
    <nav className='nav-outer-container'>
      <a href={placeholder} className='nav-links'><p>HOME</p></a>
      <a href={placeholder} className='nav-links'><p>ABOUT</p></a>
      <a href={placeholder} className='nav-links'><p>EXPERIENCE</p></a>
      <a href={placeholder} className='nav-links'><p>PROJECTS</p></a>
      <a href={placeholder} className='nav-links'><p>CONTACT</p></a>
    </nav>
  );
}

export default Nav;
