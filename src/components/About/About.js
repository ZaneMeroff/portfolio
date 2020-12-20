import React from 'react';
import profilePic from '../../images/profile_pic.jpg';
import { resumeData } from '../../resumeData';
import './About.css';

export const About = () => {
  return (
    <section id='about-section' className='about-outer-container'>
      <div className='profile-pic-container'><img alt='zacharys profile' src={profilePic} className='profile-pic'/></div>
      <div className='about-info-container'>
        <h2 className='about-text'>Greetings!</h2>
        <p className='about-text'>{resumeData.bioDescription}</p>
        <div className='contact-info-container'>
          <h2 className='about-text'>Contact Details</h2>
          <p className='about-text'>Zachary Nemeroff</p>
          <p className='about-text'>Denver, CO</p>
          <a rel='noopener noreferrer' aria-label='send email' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
          <a rel='noopener noreferrer' href={resumeData.resumeURL} target='_blank'><button tabIndex='-1' aria-label='view resume as PDF' className='resume-button'>resume.pdf</button></a>
        </div>
      </div>
    </section>
  );

}
