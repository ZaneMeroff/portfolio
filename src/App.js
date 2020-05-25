import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import SimonGame from './components/SimonGame/SimonGame';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import './App.css';

const App = () => {
  return (
    <section>
      <Nav />
      <Header />
      <About />
      <SimonGame />
      <WorkExperience />
      <Projects />
    </section>
  );
}

export default App;
