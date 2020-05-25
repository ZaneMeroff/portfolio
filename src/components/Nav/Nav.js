import React from 'react';
import './Nav.css';

const placeholder = '';

const Nav = () => {
  return (
    <nav className='nav-outer-container'>
      <a href='#header-section' className='nav-links'><p>Home</p></a>
      <a href='#about-section' className='nav-links'><p>About</p></a>
      <a href='#simon-game-section' className='nav-links'><p>Simon</p></a>
      <a href='#work-experience-section' className='nav-links'><p>Experience</p></a>
      <a href='#projects-section' className='nav-links'><p>Projects</p></a>
      <a href='#contact-section' className='nav-links'><p>Contact</p></a>
    </nav>
  );
}

export default Nav;
