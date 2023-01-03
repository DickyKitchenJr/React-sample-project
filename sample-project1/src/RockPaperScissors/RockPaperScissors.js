import React, { useState } from "react";
import Paper from './RPSImages/Paper.jpg';
import Rock from './RPSImages/Rock.jpg';
import Scissors from './RPSImages/Scissors.jpg';
import "./RockPaperScissors.css";

function RockPaperScissors() {
  const [userPick, setUserPick] = useState(0);
  const [computerPick, setComputerPick] = useState(0);

  return <>
    <h2>Rock Paper Scissors!</h2>
    <img className="paper" src={Paper} alt="crumpled paper" />
    <img className="rock" src={Rock} alt="boulder" />
    <img className="scissors" src={Scissors} alt="scissors" />
  </>;
}

export default RockPaperScissors;
