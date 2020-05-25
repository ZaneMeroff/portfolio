import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import WorkExperience from './components/WorkExperience/WorkExperience';
import './App.css';

const App = () => {
  return (
    <section>
      <Nav />
      <Header />
      <About />
      <WorkExperience />
    </section>
  );
}

export default App;
