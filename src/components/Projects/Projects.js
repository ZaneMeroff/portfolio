import React from 'react';
import { projectData } from '../../projectData';
import './Projects.css';

export const Projects = () => {
  return (
    <section id='projects-section' className='projects-outer-container'>
      <div className='all-projects-container'>
        {projectData.map(project => {
          return (
            <div key={project.name} className='project-container'>
              <h1 className='project-title'>{project.name}</h1>
              <i className='project-techs'>{project.techsUsed}</i>
              <p className='project-description'>{project.description}</p>
              <a rel='noopener noreferrer' href={project.repoURL} target='_blank'><button className='project-button'>view repo</button></a>
              <a rel='noopener noreferrer' href={project.liveLink} target='_blank'><button className='project-button'>{project.liveButtonText}</button></a>
            </div>
          )
        })}
      </div>
    </section>
  );

}
