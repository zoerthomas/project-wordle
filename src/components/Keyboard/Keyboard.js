import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({ pastGuesses, answer }) {
  const rowOne = "QWERTYUIOP".split("");
  const rowTwo = "ASDFGHJKL".split("");
  const rowThree = "ZXCVBNM".split("");

  const getLetterStatus = (letter) => {
    for (const guess of pastGuesses) {
      const result = checkGuess(guess, answer);
      for (const cell of result) {
        if (cell.letter === letter) {
          return cell.status;
        }
      }
    }
    return "";
  };
  const renderKey = (letter) => {
    const status = getLetterStatus(letter);
    const cellClass = `keyboard-key ${status ? status : ""}`;
    return (
      <div className={cellClass} key={letter}>
        {letter}
      </div>
    );
  };
  return (
    <div className="keyboard" title="display only">
      <div className="keyboard-row">
        {rowOne.map(renderKey)}
      </div>
      <div className="keyboard-row">
        {rowTwo.map(renderKey)}
      </div>
      <div className="keyboard-row">
        {rowThree.map(renderKey)}
      </div>
    </div>
  );
}

export default Keyboard;
