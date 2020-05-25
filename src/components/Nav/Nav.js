import React from 'react';
import './Nav.css';

const Nav = () => {

  const performSmoothScroll = sectionName => {
      document.querySelector(`#${sectionName}-section`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <nav className='nav-outer-container'>
      <p onClick={() => performSmoothScroll('header')} className='nav-links'>Home</p>
      <p onClick={() => performSmoothScroll('about')} className='nav-links'>About</p>
      <p onClick={() => performSmoothScroll('simon-game')} className='nav-links'>Simon</p>
      <p onClick={() => performSmoothScroll('work-experience')} className='nav-links'>Experience</p>
      <p onClick={() => performSmoothScroll('projects')} className='nav-links'>Projects</p>
      <p onClick={() => performSmoothScroll('contact')} className='nav-links'>Contact</p>
    </nav>
  );
}

export default Nav;
