import React from 'react';
import { projectData } from '../../projectData';
import './Projects.css';

const Projects = () => {

  return (
    <section id='projects-section' className='projects-outer-container'>
      <h1>PROJECTS</h1>
      <p>{projectData[0].name}</p>
      <p>{projectData[0].techsUsed}</p>
    </section>
  );

}

export default Projects;
