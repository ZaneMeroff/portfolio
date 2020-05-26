import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import './SimonGame.css';

const Simon = () => {
  return (
    <section id='simon-section' className='simon-game-outer-container'>
      <h1 className='simon-title'>Mr. Simon Game</h1>
      <GameBoard />
    </section>
  )
}

export default Simon;
