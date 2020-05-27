import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {

  return (
    <section id='experience-section' className='work-experience-outer-container'>
      <h3 className='experience-heading'>Education</h3>
      <div>
        <h1>Turing School of Software & Design</h1>
        <p>Graduate of Front End Development Program</p>
        <p>September 2019 - April 2020</p>
        <ul>
          <li>Built 14 unique web applications from scratch with vanilla JS, React, & React Native</li>
          <li>Created thorough unit testing suites for every application</li>
          <li>Programmed for team projects of four people, paired projects, and solo projects</li>
          <li>Focused on JavaScript fundementals for 12 weeks</li>
          <li>Commited 1,200 hours building applications with front end and back end technologies</li>
          <li>Dedicated 600 hours working strictly with React, React Native, Router, and Redux</li>
        </ul>
      </div>
    </section>
  );

}

export default WorkExperience;
