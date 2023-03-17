import { render, fireEvent, getByRole } from '@testing-library/react';
import RockPaperScissors from '../RockPaperScissors/RockPaperScissors';

describe(RockPaperScissors, () =>{
    it("displays the user's pick as Rock when player picks Rock", () =>{
        const {getByTestId, getByRole} = render(<RockPaperScissors/>);
        const ChooseRock = getByRole("button", {name: "Rock"});
        fireEvent.click(ChooseRock);
        const PlayerChoice = getByTestId('playerChoice').textContent;
        expect(PlayerChoice).toEqual("Player Pick: Rock")
    });

    it("displays the user's pick as Paper when player picks Paper", () => {
      const { getByTestId, getByRole } = render(<RockPaperScissors />);
      const ChoosePaper = getByRole("button", { name: "Paper" });
      fireEvent.click(ChoosePaper);
      const PlayerChoice = getByTestId("playerChoice").textContent;
      expect(PlayerChoice).toEqual("Player Pick: Paper");
    });

    it("displays the user's pick as Scissors when player picks Scissors", () => {
      const { getByTestId, getByRole } = render(<RockPaperScissors />);
      const ChooseScissors = getByRole("button", { name: "Scissors" });
      fireEvent.click(ChooseScissors);
      const PlayerChoice = getByTestId("playerChoice").textContent;
      expect(PlayerChoice).toEqual("Player Pick: Scissors");
    });

    it("should not display a blank Computer Pick: after player chooses", () => {
      const { getByTestId, getByRole } = render(<RockPaperScissors />);
      const ChooseScissors = getByRole("button", { name: "Scissors" });
      fireEvent.click(ChooseScissors);
      const ComputerChoice = getByTestId("computerChoice").textContent;
      expect(ComputerChoice).not.toEqual("Computer Pick:");
    });

    it("resets the outputs when clicking the Reset button", () => {
      const { getByTestId, getByRole } = render(<RockPaperScissors />);
      const ChooseRock = getByRole("button", { name: "Rock" });
      const Reset = getByRole("button", {name: "Reset"})
      fireEvent.click(ChooseRock);
      fireEvent.click(Reset);
      const PlayerChoice = getByTestId("playerChoice").textContent;
      expect(PlayerChoice).toEqual("Player Pick: ");
      const ComputerChoice = getByTestId("computerChoice").textContent;
      expect(ComputerChoice).toEqual("Computer Pick: ")
    });
})