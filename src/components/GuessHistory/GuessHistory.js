import React from 'react';

function GuessHistory({ guesses }) {
  return <div>
    <ul>
      {guesses.map((guess, index) => (
        <li key={index}>{guess}</li>
      ))}
    </ul>
  </div>;
}

export default GuessHistory;
