import React from 'react';
import { resumeData } from '../../resumeData';
import './WorkExperience.css';

export const WorkExperience = () => {

  const buildExperienceHeading = title => {
    return (
      <div className='experience-heading-box'>
        <div className='experience-heading-border'>
          <h3 className='experience-heading'>{title}</h3>
        </div>
      </div>
    )
  }

  return (
    <section id='experience-section' className='work-experience-outer-container'>
      <div className='experience-container'>
        { buildExperienceHeading('Education') }
        <div className='experience-right-container'>
          <h1 className='experience-title'>{resumeData.education.school}</h1>
          <p className='experience-position'>{resumeData.education.position}</p>
          <p className='experience-time'>{resumeData.education.time}</p>
          <ul>
            {resumeData.education.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className='experience-container'>
        { buildExperienceHeading('Experience') }
        <div className='experience-right-container'>
          {resumeData.jobs.map(job => {
            return (
              <div key={job.name} className='job-container'>
                <h1 className='experience-title'>{job.name}</h1>
                <p className='experience-position'>{job.position}</p>
                <p className='experience-time'>{job.time}</p>
                <ul>
                  {job.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
                </ul>
              </div>)
          })}
        </div>
      </div>
      <div className='tech-experience-container'>
        { buildExperienceHeading('Tech Skills') }
        <div className='tech-skills-right-container'>
          <div className='tech-skills-bullets'>{resumeData.techSkillz.slice(0, 7).map(item => <li key={item} className='experience-item'>{item}</li>)}</div>
          <div className='tech-skills-bullets'>{resumeData.techSkillz.slice(7).map(item => <li key={item} className='experience-item'>{item}</li>)}</div>
        </div>
      </div>
    </section>
  );

}
