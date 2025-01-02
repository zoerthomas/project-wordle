import React from "react";

function GameOver({ winner, guesses, answer, onReset }) {
  const bannerClass = winner ? "happy" : "sad";
  const message = winner ? (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{guesses} guesses</strong>.
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className="game-over">
      <div className={`${bannerClass} banner`}>
        {message}
        <button
          onClick={() => {
            onReset();
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOver;
