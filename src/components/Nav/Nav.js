import React from 'react';
import './Nav.css';

const Nav = () => {

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
  }

  const testFunc = () => {
    let testEl = document.querySelector('.testElement').getBoundingClientRect();
    console.log(testEl)
  }

  const navHeadings = ['home', 'about', 'simon', 'experience', 'projects', 'contact']

  return (
    <nav className='nav-outer-container'>
      {navHeadings.map(heading => {
        return <p tabindex='0' key={`${heading}`} onClick={() => performSmoothScroll(`${heading}`)} className='nav-links'>{`${heading}`}</p>
      })}
      <p onClick={testFunc} className='nav-links testElement'>{'TEST'}</p>
    </nav>
  );
}

export default Nav;
