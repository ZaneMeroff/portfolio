import React from 'react';
import { projectData } from '../../projectData';
import './Projects.css';

const Projects = () => {
  return (
    <section id='projects-section' className='projects-outer-container'>
      <div className='all-projects-container'>
        {projectData.map(project => {
          return (
            <div className='project-container'>
              <h1 className='project-title'>{project.name}</h1>
              <i className='project-techs'>{project.techsUsed}</i>
              <p className='project-description'>{project.description}</p>
              <button className='project-button'>view repo</button>
              <button className='project-button'>{project.liveButtonText}</button>
            </div>
          )
        })}
      </div>
    </section>
  );

}

export default Projects;
