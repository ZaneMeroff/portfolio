import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import './App.css';

const App = () => {
  return (
    <section>
      <Nav />
      <Header />
      <About />
    </section>
  );
}

export default App;
