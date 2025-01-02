import React, { useState } from "react";
import { sample, validateInput } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import GameOver from "../GameOver/GameOver";
import Keyboard from "../Keyboard/Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkIsRealWord } from "../../game-helpers";


function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guess, setGuess] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);
  console.info({answer});

  const handleGuessSubmit = async (newGuess) => {
    if (validateInput(newGuess)) {
      return alert(validateInput(newGuess));
    }
    if (pastGuesses.includes(newGuess)) {
      return alert("You already guessed that word.");
    }
    const isRealWord = await checkIsRealWord(newGuess);
    if (!isRealWord) {
      return alert("That is not a real word.");
    }
    setGuess(newGuess);
    setPastGuesses([...pastGuesses, newGuess]);
  };
  const resetGame = () => {
    setGuess("");
    setPastGuesses([]);
    setAnswer(sample(WORDS));
  };

  return (
    <>
    <div className="game-wrapper">
      <Guess inputGuess={pastGuesses} answer={answer} />
      {pastGuesses.length == NUM_OF_GUESSES_ALLOWED | answer == guess ? (
        <GameOver
          winner={answer == guess}
          answer={answer}
          guesses={pastGuesses.length}
          onReset={resetGame}
        />
      ) : (
        <>
        <Keyboard pastGuesses={pastGuesses} answer={answer} />
        <GuessInput guess={guess} onGuessSubmit={handleGuessSubmit} />
        </>
      )}
    </div>
    </>
  );
}

export default Game;
