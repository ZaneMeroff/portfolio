import React from 'react';
import profilePic from '../../images/profile_pic.jpg';
import './About.css';

const resumeURL = 'https://alumni.turing.io/sites/default/files/resumes/Zachary_Nemeroff_resume_2020.pdf';

const About = () => {

  return (
    <section id='about-section' className='about-outer-container'>
      <div className='profile-pic-container'><img src={profilePic} className='profile-pic'/></div>
      <div className='about-info-container'>
        <h2 className='about-text'>Greetings!</h2>
        <p className='about-text'>
           My name is Zachary Nemeroff, and I’m a front end software developer and recent graduate of the Turing School of Software and Design. I have an affinity for test driven development and object-oriented programming with agile workflow processes. At Turing I focused on building applications using REST APIs with HTML5, CSS3, vanilla JavaScript, jQuery, React, and React Native, using Git/GitHub for version control and creating comprehensive unit testing suites. I'm currently seeking a new career opportunity where I will be challenged daily, so that I may expand my knowledge and grow my technical skills. If <em>you're</em> up for a challenge, try the Mr. Simon Game I created below!
        </p>
        <div className='contact-info-container'>
          <div>
            <h2 className='about-text'>Contact Details</h2>
            <p className='about-text'>Zachary Nemeroff</p>
            <p className='about-text'>Denver, CO</p>
            <a href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
          </div>
          <a href={resumeURL} target='_blank'><button className='resume-button'>view resume.pdf</button></a>
        </div>
      </div>
    </section>
  );

}

export default About;
