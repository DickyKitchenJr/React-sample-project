import React, { useState } from "react";
import Paper from './RPSImages/Paper.jpg';
import "./RockPaperScissors.css";

function RockPaperScissors() {
  const [userPick, setUserPick] = useState(0);
  const [computerPick, setComputerPick] = useState(0);

  return <>
    <h2>Rock Paper Scissors!</h2>
    <img src={Paper} alt="crumpled paper" />
  </>;
}

export default RockPaperScissors;
