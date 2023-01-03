import React, { useState } from "react";
import "./RockPaperScissors.css";

function RockPaperScissors() {
  const [userPick, setUserPick] = useState(0);
  const [computerPick, setComputerPick] = useState(0);

  return <>
    <h2>Rock Paper Scissors!</h2>
  </>;
}

export default RockPaperScissors;
