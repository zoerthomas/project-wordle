export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const validateInput = (guess) => { 
  if (guess.length !== 5) {
    return "Please enter a 5-letter word.";
  }
  if (guess.match(/[^a-zA-Z]/)) {
    return "Please enter only letters.";
  }
  return null;
}