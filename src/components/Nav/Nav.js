import React from 'react';
import hamburgerIcon from '../../images/hamburger_icon.png';
import './Nav.css';

export const Nav = () => {

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
  }

  const printNavButtons = () => {
    const navHeadings = ['home', 'about', 'simon', 'experience', 'projects', 'contact'];
    const navButtons = navHeadings.map(heading => {
      return <p tabIndex='0' key={`${heading}`} onClick={() => performSmoothScroll(`${heading}`)} className='nav-links'>{`${heading}`}</p>
    })
    return navButtons;
  }

  return (
    <nav className='nav-outer-container'>
      <div className='mobile-nav-container hidden'>
        <img className='hamburger-image' src={hamburgerIcon} />
      </div>
      <div className='full-nav-container'>
        {printNavButtons()}
      </div>
    </nav>
  );
}
