import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ inputGuess, answer }) {
  const MAX_LETTERS = 5;

  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guessResult = inputGuess[index] ? checkGuess(inputGuess[index], answer) : [];
        return (
          <div key={index} className="guess">
            {range(MAX_LETTERS).map((letterIndex) => {
              const cell = guessResult[letterIndex] || {};
              const cellClass = `cell ${cell.status || ""}`;
              return (
                <div key={letterIndex} className={cellClass}>
                  {cell.letter || ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Guess;