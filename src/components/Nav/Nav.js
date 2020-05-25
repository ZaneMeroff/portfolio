import React from 'react';
import './Nav.css';

const Nav = () => {

  const scrollToHeader = () => {
      document.querySelector('#header-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToAbout = () => {
      document.querySelector('#about-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToSimonGame = () => {
      document.querySelector('#simon-game-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToWorkExperience = () => {
      document.querySelector('#work-experience-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToProjects = () => {
      document.querySelector('#contact-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToContact = () => {
      document.querySelector('#projects-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <nav className='nav-outer-container'>
      <p onClick={scrollToHeader} className='nav-links'>Home</p>
      <p onClick={scrollToAbout} className='nav-links'>About</p>
      <p onClick={scrollToSimonGame} className='nav-links'>Simon</p>
      <p onClick={scrollToWorkExperience} className='nav-links'>Experience</p>
      <p onClick={scrollToProjects} className='nav-links'>Projects</p>
      <p onClick={scrollToContact} className='nav-links'>Contact</p>
    </nav>
  );
}

export default Nav;
