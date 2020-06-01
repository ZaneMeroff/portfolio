import React, { useState } from 'react';
import inactiveHamburger from '../../images/hamburger_icon.png';
import activeHamburger from '../../images/hamburger_icon_white.png';
import './Nav.css';

export const Nav = () => {

  const [ mobileNavVisible, setMobileNavVisible ] = useState(false);
  const [ hamburgerStatus, setHamburgerStatus ] = useState(inactiveHamburger)

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

  const onHamburgerClick = () => {
    if (mobileNavVisible) {
      setHamburgerStatus(inactiveHamburger)
      setMobileNavVisible(false);
    } else {
      setHamburgerStatus(activeHamburger)
      setMobileNavVisible(true);
    }
  }

  return (
    <nav>
      <div onClick={onHamburgerClick} className='mobile-nav-container'>
        <img alt='menu icon' className='hamburger-image' src={hamburgerStatus} />
        <div className={ mobileNavVisible ? 'mobile-menu' : 'hidden'}>
          { printNavButtons() }
        </div>
      </div>
      <div className='full-nav-container'>
        { printNavButtons() }
      </div>
    </nav>
  );
}
