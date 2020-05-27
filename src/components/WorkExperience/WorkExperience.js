import React from 'react';
import { resumeData } from '../../resumeData';
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
          <h1 className='experience-title'>{resumeData.education.school}</h1>
          <i className='experience-position'>{resumeData.education.position}</i>
          <p className='experience-time'>{resumeData.education.time}</p>
          <ul>
            {resumeData.education.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className='experience-container'>
        <div className='experience-heading-box'>
          <div className='experience-heading-border'>
            <h3 className='experience-heading'>Experience</h3>
          </div>
        </div>
        <div className='experience-right-container'>
          <h1 className='experience-title'>Adrift Tiki Bar & Restaurant</h1>
          <i className='experience-position'>General Manager</i>
          <p className='experience-time'>March 2016 - March 2019</p>
          <ul>
            <li className='experience-item'>Sole general manager responsible for overseeing two million dollar gross annual operation</li>
            <li className='experience-item'>Reduced annual labor costs by 8% within first year</li>
            <li className='experience-item'>Increased annual gross sales by 15% within first year</li>
            <li className='experience-item'>Created multiple successful marketing campaigns and special events</li>
            <li className='experience-item'>Managed social media accounts to increase brand awareness</li>
            <li className='experience-item'>Created SOPs for all positions and comprehensive onboard training programs</li>
          </ul>
        </div>
      </div>

    </section>
  );

}

export default WorkExperience;
