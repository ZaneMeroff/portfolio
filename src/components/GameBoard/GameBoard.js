import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameBoard.css'

let randomNumArray = []
let playerResponse = []
let playerClickCounter = 0
let roundCount = 0;
let j;

const GameBoard = () => {

  const [redActive, setRedActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);
  const [myOrYours, setMyOrYours] = useState('');
  const [turnText, setTurnText] = useState('');
  const [playerClickDisplay, setPlayerClickDisplay] = useState(0);
  const [disableButtons, setDisableButtons] = useState(true);
  const [rulesVisible, setRulesVisible] = useState(false);
  const [gameBoardVisible, setGameBoardVisible] = useState(true);

  const colorKey = {
    0 : setRedActive,
    1 : setYellowActive,
    2 : setGreenActive,
    3 : setBlueActive
  }

  const startGame = () => {
    randomNumArray = generate10randomNumbers();
    roundCount = 0;
    playerResponse = [];
    playerClickCounter = 0;
    setPlayerClickDisplay(0);
    setMyOrYours('MY');
    setTurnText('TURN!');
    nextRound();
  }

  const onViewRulesClick = () => {
    if (!rulesVisible) {
      setRulesVisible(true)
      setGameBoardVisible(false)
    } else {
      setRulesVisible(false)
      setGameBoardVisible(true)
    }
  }

  const validateAnswer = () => {
    for (let i = 0; i < playerResponse.length; i++) {
      if (playerResponse[i] === randomNumArray[i]) {
        if ( i === (playerResponse.length - 1)) {
          setMyOrYours('RIGHT!');
          setTurnText('');
          setDisableButtons(true);
          playerResponse = [];
          setTimeout(() => {
            nextRound();
          }, 1000)
        }
      } else {
        setMyOrYours('GAME');
        setTurnText('OVER!');
        setDisableButtons(true);
      }
    }
  }

  const nextRound = () => {
    roundCount++
    playerClickCounter = 0
    setPlayerClickDisplay(0);
    setMyOrYours('MY');
    setTurnText('TURN!');
    j = 0;
    for (let i = 1; i <= (roundCount * 2); i++) {
      makeColorFlash(i);
    }
  }

  const increaseRoundCount = () => {
    setRoundCount(roundCount + 1)
  }

  const randomNum = () => {
    return Math.floor(Math.random() * 4)
  }

  const handlePlayerResponse = colorNum => {
    playerResponse.push(colorNum)
    playerClickCounter++
    setPlayerClickDisplay(playerClickDisplay + 1)
    if (roundCount === 1 && playerClickCounter === 1) {
      validateAnswer();
    }
    if (roundCount === 2 && playerClickCounter === 2) {
      validateAnswer();
    }
    if (roundCount === 3 && playerClickCounter === 3) {
      validateAnswer();
    }
    if (roundCount === 4 && playerClickCounter === 4) {
      validateAnswer();
    }
    if (roundCount === 5 && playerClickCounter === 5) {
      validateAnswer();
    }
    if (roundCount === 6 && playerClickCounter === 6) {
      validateAnswer();
    }
    if (roundCount === 7 && playerClickCounter === 7) {
      validateAnswer();
    }
    if (roundCount === 8 && playerClickCounter === 8) {
      validateAnswer();
    }
    if (roundCount === 9 && playerClickCounter === 9) {
      validateAnswer();
    }
    if (roundCount === 10 && playerClickCounter === 10) {
      validateAnswer();
    }
  }

  return (
    <>
    <ScoreBoard roundCount={roundCount} startGame={startGame} playerClickDisplay={playerClickDisplay} randomNumArray={randomNumArray} onViewRulesClick={onViewRulesClick} rulesVisible={rulesVisible}/>
    <div className={ rulesVisible ? 'rules-outer-container' : 'hidden' }>
      <div className='rules-inner-container'>
        <p className='rules-text'>
          It's you against Mr. Simon! When the game starts, Simon will create a color
          pattern that grows with each round. Your challenge is to match Simon's pattern
          by selecting the glowing lights in the correct order.
        </p>
      </div>
    </div>
    <div className={ gameBoardVisible ? 'gameboard-outer-container' : 'hidden' }>
      <div className='center-circle'>
        <p className='turn-text-1'>{myOrYours}</p>
        <p className='turn-text-2'>{turnText}</p>
      </div>
      <div className={ disableButtons ? 'top-section disabled' : 'top-section' }>
        <div tabindex='0' onClick={() => handlePlayerResponse(0)} className={ redActive ? 'red-box red-active' : 'red-box' }></div>
        <div tabindex='0' onClick={() => handlePlayerResponse(1)} className={ yellowActive ? 'yellow-box yellow-active' : 'yellow-box' }></div>
      </div>
      <div className={ disableButtons ? 'bottom-section disabled' : 'bottom-section' }>
        <div tabindex='0' onClick={() => handlePlayerResponse(2)} className={ greenActive ? 'green-box green-active' : 'green-box' }></div>
        <div tabindex='0' onClick={() => handlePlayerResponse(3)} className={ blueActive ? 'blue-box blue-active' : 'blue-box' }></div>
      </div>
    </div>
    </>
  );

}

export default GameBoard;
