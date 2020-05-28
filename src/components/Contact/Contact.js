import React from 'react';
import { resumeData } from '../../resumeData';
import './Contact.css';

const Contact = () => {

  return (
    <section id='contact-section' className='contact-outer-container'>
      <p>Please feel free to contact me for work, suggestions, or networking!</p>
      <p className='about-text'>Zachary Nemeroff</p>
      <p className='about-text'>Denver, CO</p>
      <a rel='noopener noreferrer' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
      <a rel='noopener noreferrer' href={resumeData.resumeURL} target='_blank'><button className='resume-button'>view resume.pdf</button></a>
    </section>
  );

}

export default Contact;
