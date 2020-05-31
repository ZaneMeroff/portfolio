import React, { useState } from 'react';
import hamburgerIcon from '../../images/hamburger_icon.png';
import './Nav.css';

export const Nav = () => {

  const [ mobileNavVisible, setMobileNavVisible ] = useState(false);

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
      setMobileNavVisible(false);
    } else {
      setMobileNavVisible(true);
    }
  }

  return (
    <nav className='nav-outer-container'>
      <div onClick={onHamburgerClick} className='mobile-nav-container'>
        <img className='hamburger-image' src={hamburgerIcon} />
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
