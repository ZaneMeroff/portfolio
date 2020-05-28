import React from 'react';
import { projectData } from '../../projectData';
import './Projects.css';

const Projects = () => {

  return (
    <section id='projects-section' className='projects-outer-container'>
      <div className='all-projects-container'>

        <div className='project-container'>
          <h1 className='project-title'>{projectData[0].name}</h1>
          <i className='project-techs'>{projectData[0].techsUsed}</i>
          <p className='project-description'>{projectData[0].description}</p>
          <button className='view-repo-button'>view repo</button>
          <button className='live-project-button'>{projectData[0].liveButtonText}</button>
        </div>

      </div>
    </section>
  );

}

export default Projects;
