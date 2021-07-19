import React from 'react';
import Particles from 'react-particles-js';
import './ParticlesAnimation.css';

export const ParticlesAnimation = () => {

  return (
    <section className='particles-outer-container'>
          
      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              }
            }
          }
        }} 
      />

    </section>
  );
}