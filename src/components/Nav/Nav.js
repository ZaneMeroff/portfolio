import React, { useState } from 'react';
import hamburgerIcon from '../../images/hamburger_icon.png';
import './Nav.css';

export const Nav = () => {

  const [mobileNavVisible, setMobileNavVisible] = useState(false);

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
      <div className='mobile-nav-container'>
        <img className='hamburger-image' src={hamburgerIcon} />
        <div className='mobile-menu'>
          {printNavButtons()}
        </div>
      </div>
      <div className='full-nav-container hidden'>
        {printNavButtons()}
      </div>
    </nav>
  );
}
