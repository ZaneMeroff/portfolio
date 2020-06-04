import React, { useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './Nav.css';

export const Nav = () => {

  smoothscroll.polyfill();

  const [ mobileNavVisible, setMobileNavVisible ] = useState(false);
  const [ animateClass, setAnimateClass ] = useState('hidden');

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
    onHamburgerClick();
  }

  const printNavButtons = () => {
    const navHeadings = ['home', 'about', 'simon', 'experience', 'projects', 'contact'];
    const navButtons = navHeadings.map(heading => {
      return <button tabIndex='0' aria-label={`${heading} section`} key={`${heading}`} onClick={() => performSmoothScroll(`${heading}`)} className='nav-buttons'>{`${heading}`}</button>
    })
    return navButtons;
  }

  const onHamburgerClick = () => {
    if (mobileNavVisible) {
      setMobileNavVisible(false);
      setAnimateClass('mobile-menu animate-slide-out');
      setTimeout(() => {
        setAnimateClass('hidden');
      }, 900);
    } else {
      setMobileNavVisible(true);
    }
  }

  return (
    <nav>
      <div className='mobile-nav-container'>
        <button onClick={onHamburgerClick} aria-label='toggle menu visibility' className={ !mobileNavVisible ? 'hamburger-button' : 'hamburger-button-active' }></button>
        <div className={ mobileNavVisible ? 'mobile-menu animate-slide-in' : `${animateClass}`}>
          { printNavButtons() }
        </div>
      </div>
      <div className='full-nav-container'>
        { printNavButtons() }
      </div>
    </nav>
  );
}
