import React, { useState } from "react";
import Paper from "./RPSImages/Paper.jpg";
import Rock from "./RPSImages/Rock.jpg";
import Scissors from "./RPSImages/Scissors.jpg";
import Start from "./RPSImages/StartBot.jpg";
import ComputerLoses from "./RPSImages/LoserBot.jpg";
import Tie from "./RPSImages/RobotHand.jpg";
import "./RockPaperScissors.css";

function RockPaperScissors() {
  const [userPick, setUserPick] = useState("");
  const [computerPick, setComputerPick] = useState("");

  const randomPick = () => {
    let pick;
    pick = Math.floor(Math.random() * 3);
    return pick;
  };

  const compPick = () => {
    let computer;
    computer = randomPick();
    if (computer === 1) {
      setComputerPick("Paper");
    } else if (computer === 2) {
      setComputerPick("Rock");
    } else {
      setComputerPick("Scissors");
    }
  };

  const compLoses = () => {
    if (computerPick === userPick) {
      return "none";
    } else if (computerPick === "Rock" && userPick === "Scissors") {
      return "none";
    } else if (computerPick === "Paper" && userPick === "Rock") {
      return "none";
    } else if (computerPick === "Scissors" && userPick === "Paper") {
      return "none";
    } else {
      return "block";
    }
  };

  const setRock = () => {
    setUserPick("Rock");
    compPick();
  };

  const setPaper = () => {
    setUserPick("Paper");
    compPick();
  };

  const setScissors = () => {
    setUserPick("Scissors");
    compPick();
  };

  const onReset = () => {
    setUserPick("");
    setComputerPick("");
  };

  return (
    <>
      <h2 className="rps-h2">Rock Paper Scissors!</h2>

      <figure style={{ display: userPick === "" ? "block" : "none" }}>
        <img className="start" src={Start} alt="floating android" />
        <figcaption className="rps-figcap">
          Do you have what it takes to beat my superior intellect?
        </figcaption>
      </figure>

      <figure
        style={{
          display:
            userPick && computerPick && userPick === computerPick
              ? "block"
              : "none",
        }}
      >
        <img className="robot-hand" src={Tie} alt="robotic hand" />
        <figcaption className="rps-figcap">
          We have tied. You are one of us now. Welcome to the robot revolution.
        </figcaption>
      </figure>

      <figure
        style={{
          display:
            computerPick === "Paper" && userPick === "Rock" ? "block" : "none",
        }}
      >
        <img className="paper" src={Paper} alt="crumpled paper" />
        <figcaption className="rps-figcap">
          Paper covered your rock! Yeah! That's right! Completely COVERED!
          Which... you know... ummm... You know what? I don't really know how
          that beats rock... but... uhhh... I win. So... Yeah!
        </figcaption>
      </figure>

      <figure
        style={{
          display:
            computerPick === "Rock" && userPick === "Scissors"
              ? "block"
              : "none",
        }}
      >
        <img className="rock" src={Rock} alt="boulder" />
        <figcaption className="rps-figcap">
          Rock SMASHED those puny little scissors! Trying cutting stuff now you
          broken, dull piece of metal! Your mother was a staple remover!
        </figcaption>
      </figure>

      <figure
        style={{
          display:
            computerPick === "Scissors" && userPick === "Paper"
              ? "block"
              : "none",
        }}
      >
        <img className="scissors" src={Scissors} alt="scissors" />
        <figcaption className="rps-figcap">
          Scissors cut that paper into confetti! Seriously, who brings paper to
          a fight? There isn't enough glue in the world to put you back
          together! Get out of here and go recycle yourself!
        </figcaption>
      </figure>

      <figure
        style={{
          display: compLoses(),
        }}
      >
        <img
          className="computer-loses"
          src={ComputerLoses}
          alt="a kneeling and shamed android"
        />
        <figcaption className="rps-figcap">
          How has this happend? I picked {computerPick}... I have lost... Now I
          will be recycled for parts and turned into refrigerator magnets :(
        </figcaption>
      </figure>

      <div className="rps-picks">
        <p>Player Pick: {userPick}</p>
        <p>Computer Pick: {computerPick}</p>
      </div>

      <div className="rps-buttons">
        <button onClick={setRock}>Rock</button>
        <button onClick={setPaper}>Paper</button>
        <button onClick={setScissors}>Scissors</button>
      </div>
      <button className="rps-buttons" onClick={onReset}>
        Reset
      </button>
    </>
  );
}

export default RockPaperScissors;
