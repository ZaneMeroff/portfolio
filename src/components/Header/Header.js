import React from 'react';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';
import './Header.css';

const Header = () => {
  return (
    <section className='header-outer-container'>
      <h1 className='title-name'>ZACHARY NEMEROFF</h1>
      <h3 className='title-industry'>Software Developer</h3>
      <img src={gitHubIcon} className='social-icons'/>
      <img src={linkedInIcon} className='social-icons'/>
      <img src={twitterIcon} className='social-icons'/>
    </section>
  );
}

export default Header;
