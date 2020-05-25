import React from 'react';
import profilePic from '../../images/profile_pic.jpg';
import './About.css';

const About = () => {

  return (
    <section id='about-section' className='about-outer-container'>

      <img src={profilePic} className='profile-pic'/>
      <div className='about-info-container'>
        <h2>Greetings!</h2>
        <p>
           My name is Zachary Nemeroff, and I’m a front end software developer and recent graduate of the Turing School of Software and Design. I have an affinity for test driven development and object-oriented programming with agile workflow processes. At Turing I focused on building applications using REST APIs with HTML5, CSS3, vanilla JavaScript, jQuery, React, and React Native, using Git/GitHub for version control and creating comprehensive unit testing suites. I'm currently seeking a new career opportunity where I will be challenged daily, so that I may expand my knowledge and grow my technical skills. If <em>you're</em> up for a challenge, try the Mr. Simon Game I created below!
        </p>
        <h2>Contact Details</h2>
        <p>Zachary Nemeroff</p>
        <p>Denver, CO</p>
        <p>ZaNemeroff@gmail.com</p>
      </div>
    </section>
  );

}

export default About;
