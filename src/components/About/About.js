import React from 'react';
import profilePic from '../../images/profile_pic.jpg';
import { resumeData } from '../../resumeData';
import './About.css';

export const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-clip-path-top"></div>
      <section id='about-section' className='about-outer-container'>
        <div className='profile-pic-container'><img alt='zacharys profile' src={profilePic} className='profile-pic'/></div>
        <div className='about-info-container'>
          <h2 className='about-text'>Hello!</h2>
          <div className='about-text'>
            <div>
              I'm Zachary Nemeroff, a full-stack developer who
              specializes in building robust, user-centered applications using
              test-driven development and modern JavaScript technologies. I
              specialize in creating scalable, accessible experiences that
              actually work for everyone, with expertise spanning TypeScript,
              React, Vue.js, and Node.js, to name a few. Scroll down to see my full tech stack expertise.
            </div>
            <div style={{ marginTop: "12px" }}>
              My hospitality background from my previous career honed my
              leadership skills by leading teams under pressure, communicating
              well with clients and team members, and pivoting quickly when
              challenges arise. I've developed a keen eye for spotting
              bottlenecks before they derail projects.
            </div>
            <div style={{ marginTop: "12px" }}>
              What gets me excited? Complex challenges that demand elegant
              solutions I haven't built before. I actively seek projects that
              push boundaries and expand my technical horizons—because the best
              growth happens just outside your comfort zone.
            </div>
            <div style={{ marginTop: "12px" }}>
              Want to see my code in action? Test your memory with the Simon
              game I built below!
            </div>
          </div>
          <div className='contact-info-container'>
            <h2 className='about-text'>Contact Details</h2>
            <p className='about-text'>Zachary Nemeroff</p>
            <p className='about-text'>Denver, CO</p>
            <a rel='noopener noreferrer' aria-label='send email' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
            <a rel='noopener noreferrer' href='/zachary_nemeroff_resume_2025.pdf' target='_blank'><button tabIndex='-1' aria-label='view resume as PDF' className='resume-button'>resume.pdf</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}



