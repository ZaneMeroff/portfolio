import React from 'react';
import './Header.css';
import { resumeData } from '../../resumeData';
import { TrianglesAnimation } from '../TrianglesAnimation/TrianglesAnimation';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';

export const Header = () => {

  const performSmoothScroll = () => {
    document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section id='home-section' className='header-outer-container'>
      <TrianglesAnimation />
      <h1 className='title-name'>Zachary</h1>
      <h1 className='title-name'>Nemeroff</h1>
      <h2 className='title-industry'>Software Developer</h2>
      <div className='social-icon-container'>
        <a rel='noopener noreferrer' aria-label='my github profile' href={resumeData.gitHubURL} target='_blank'><img alt='Github icon' src={gitHubIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' aria-label='my linkedin profile' href={resumeData.linkedInURL} target='_blank'><img alt='Linkedin icon' src={linkedInIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' aria-label='my twitter profile' href={resumeData.twitterURL} target='_blank'><img alt='Twitter icon' src={twitterIcon} className='social-icons'/></a>
      </div>
      <button aria-label='scroll down' onClick={performSmoothScroll} className='down-arrow'></button>
    </section>
  );
}
