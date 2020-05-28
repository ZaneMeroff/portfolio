import React from 'react';
import './Nav.css';

export const Nav = () => {

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
  }

  const navHeadings = ['home', 'about', 'simon', 'experience', 'projects', 'contact']

  return (
    <nav className='nav-outer-container'>
      {navHeadings.map(heading => {
        return <p tabIndex='0' key={`${heading}`} onClick={() => performSmoothScroll(`${heading}`)} className='nav-links'>{`${heading}`}</p>
      })}
    </nav>
  );
}
