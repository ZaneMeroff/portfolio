import React from 'react';
import './Header.css';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';

const gitHubURL = 'https://github.com/ZaneMeroff';
const linkedInURL = 'https://www.linkedin.com/in/zachary-nemeroff';
const twitterURL = 'https://twitter.com/zanemeroff';

const Header = () => {
  return (
    <section id='home-section' className='header-outer-container'>
      <h1 className='title-name'>ZACHARY NEMEROFF</h1>
      <h3 className='title-industry'>Software Developer</h3>
      <a href={gitHubURL} target="_blank"><img src={gitHubIcon} className='social-icons'/></a>
      <a href={linkedInURL} target="_blank"><img src={linkedInIcon} className='social-icons'/></a>
      <a href={twitterURL} target="_blank"><img src={twitterIcon} className='social-icons'/></a>
    </section>
  );
}

export default Header;
