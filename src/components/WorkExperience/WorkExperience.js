import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {

  return (
    <section id='experience-section' className='work-experience-outer-container'>

      <div className='experience-container'>
        <div className='experience-heading-box'>
          <div className='experience-heading-border'>
            <h3 className='experience-heading'>Education</h3>
          </div>
        </div>
        <div className='experience-right-container'>
          <h1 className='experience-title'>Turing School of Software & Design</h1>
          <i className='experience-position'>Graduate of Front End Development Program</i>
          <p className='experience-time'>September 2019 - April 2020</p>
          <ul>
            <li className='experience-item'>Built 14 unique web applications from scratch with vanilla JS, React, & React Native</li>
            <li className='experience-item'>Created thorough unit testing suites for every application</li>
            <li className='experience-item'>Programmed for team projects of four people, paired projects, and solo projects</li>
            <li className='experience-item'>Focused on JavaScript fundamentals for 12 weeks</li>
            <li className='experience-item'>Commited 1,200 hours building applications with front end and back end technologies</li>
            <li className='experience-item'>Dedicated 600 hours working strictly with React, React Native, Router, and Redux</li>
          </ul>
        </div>
      </div>

      <div className='experience-container'>
        <div className='experience-heading-box'>
          <div className='experience-heading-border'>
            <h3 className='experience-heading'>Professional</h3>
          </div>
        </div>
        <div className='experience-right-container'>
          <h1 className='experience-title'>Turing School of Software & Design</h1>
          <i className='experience-position'>Graduate of Front End Development Program</i>
          <p className='experience-time'>September 2019 - April 2020</p>
          <ul>
            <li className='experience-item'>Built 14 unique web applications from scratch with vanilla JS, React, & React Native</li>
            <li className='experience-item'>Created thorough unit testing suites for every application</li>
            <li className='experience-item'>Programmed for team projects of four people, paired projects, and solo projects</li>
            <li className='experience-item'>Focused on JavaScript fundamentals for 12 weeks</li>
            <li className='experience-item'>Commited 1,200 hours building applications with front end and back end technologies</li>
            <li className='experience-item'>Dedicated 600 hours working strictly with React, React Native, Router, and Redux</li>
          </ul>
        </div>
      </div>

    </section>
  );

}

export default WorkExperience;
