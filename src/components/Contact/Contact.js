import React from 'react';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';
import { resumeData } from '../../resumeData';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact-section' className='contact-outer-container'>
      <i className='contact-message'>Please feel free to contact me for work, suggestions, or networking!</i>
      <p className='about-text'>Zachary Nemeroff</p>
      <p className='about-text'>Denver, CO</p>
      <a rel='noopener noreferrer' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
      <a rel='noopener noreferrer' href={resumeData.turingAlumniURL} target='_blank'><p className='about-text email-text'>Turing School Alumni Page</p></a>
      <a rel='noopener noreferrer' href={resumeData.resumeURL} target='_blank'><button className='resume-button-footer'>view resume.pdf</button></a>

      <div className='social-icons-container'>
        <a rel='noopener noreferrer' href={resumeData.gitHubURL} target='_blank'><img alt='Github icon' src={gitHubIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' href={resumeData.linkedInURL} target='_blank'><img alt='Linkedin icon' src={linkedInIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' href={resumeData.twitterURL} target='_blank'><img alt='Twitter icon' src={twitterIcon} className='social-icons'/></a>
      </div>

    </section>
  );

}

export default Contact;
