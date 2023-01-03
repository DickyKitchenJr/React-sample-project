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

  const onReset = () => {
    setUserPick("");
    setComputerPick("");
  };

  return (
    <>
      <h2>Rock Paper Scissors!</h2>

      <figure>
        <img className="start" src={Start} alt="floating android" />
        <figcaption>
          Do you have what it takes to beat my superior intellect?
        </figcaption>
      </figure>

      <figure>
        <img className="robot-hand" src={Tie} alt="robotic hand" />
        <figcaption>
          We have tied. You are one of us now. Welcome to the robot revolution.
        </figcaption>
      </figure>

      <figure style={{ display: "none" }}>
        <img className="paper" src={Paper} alt="crumpled paper" />
        <figcaption>
          Paper covered your rock! Yeah! That's right! Completely COVERED!
          Which... you know... ummm... You know what? I don't really know how
          that beats rock... but... uhhh... I win. So... Yeah!
        </figcaption>
      </figure>

      <figure style={{ display: "none" }}>
        <img className="rock" src={Rock} alt="boulder" />
        <figcaption>
          Rock SMASHED those puny little scissors! Trying cutting stuff now you
          broken, dull piece of metal! Your mother was a staple remover!
        </figcaption>
      </figure>

      <figure style={{ display: "none" }}>
        <img className="scissors" src={Scissors} alt="scissors" />
        <figcaption>
          Scissors cut that paper into confetti! Seriously, who brings paper to
          a fight? There isn't enough glue in the world to put you back
          together! Get out of here and go recycle yourself!
        </figcaption>
      </figure>

      <figure style={{ display: "none" }}>
        <img
          className="computer-loses"
          src={ComputerLoses}
          alt="a kneeling and shamed android"
        />
        <figcaption>
          How has this happend? I picked CHOICE... I have lost... Now I will be
          recycled for parts and turned into refrigerator magnets :(
        </figcaption>
      </figure>

      <div>
        <button onClick={compPick}>Rock</button>
        <button onClick={compPick}>Paper</button>
        <button onClick={compPick}>Scissors</button>
      </div>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default RockPaperScissors;
