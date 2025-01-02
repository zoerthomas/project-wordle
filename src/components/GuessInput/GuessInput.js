import React, { useState } from 'react';

function GuessInput({ guess, onGuessSubmit }) {
  const [localGuess, setLocalGuess] = useState(guess);

  const submitGuess = (event) => {
    event.preventDefault();
    onGuessSubmit(localGuess);
    setLocalGuess(""); // Reset the input field
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submitGuess(event);
    }
  };

  return (
    <form onSubmit={submitGuess}>
      <div className="guess-input-wrapper">
        <label htmlFor="guess">Enter your guess:</label>
        <input
          type="text"
          id="guess"
          maxLength={5}
          minLength={5}
          style={{ textTransform: "uppercase" }}
          value={localGuess}
          onChange={(e) => setLocalGuess(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
}

export default GuessInput;