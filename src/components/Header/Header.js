import React from 'react';
import './Header.css';
import { resumeData } from '../../resumeData';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';
import downArrowIcon from '../../images/down_arrow_icon.png';

export const Header = () => {

  const performSmoothScroll = () => {
    document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section id='home-section' className='header-outer-container'>
      <h1 className='title-name'>Zachary Nemeroff</h1>
      <h3 className='title-industry'>Software Developer</h3>
      <div className='social-icon-container'>
        <a rel='noopener noreferrer' href={resumeData.gitHubURL} target='_blank'><img alt='Github icon' src={gitHubIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' href={resumeData.linkedInURL} target='_blank'><img alt='Linkedin icon' src={linkedInIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' href={resumeData.twitterURL} target='_blank'><img alt='Twitter icon' src={twitterIcon} className='social-icons'/></a>
      </div>
      <img onClick={performSmoothScroll} alt='down arrow button' tabIndex='0' src={downArrowIcon} className='social-icons down-arrow-button'/>
    </section>
  );
}
