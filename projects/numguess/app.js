// Declarations

// Insert answer for testing purposes
const testnum = document.getElementById('testnum');
// User input (need to ensure this only accepts a value 1-10)
const guessInput = document.getElementById('guess-input').value;
// Submit button
const submitBtn = document.getElementById('guess-value'); // this doesn't seem semantic to me

//Getting started


// Guesses baseline
let guesses = 0;
// Generated number
function numGen() {
  let generatedNumber = Math.ceil((Math.random() * 10))
  testnum.textContent = generatedNumber;
}

// Load all event listeners
// INSERT HERE

// Submit event handler

submitBtn.addEventListener('click', submitGuess);

function submitGuess(e) {
  let guess = parseInt(guessInput.value);
  console.log(guessInput);
  console.log(guess);
  // If not a number 1-10, error
  // Else, compare input to generatedNumber
  // How to handle number of guesses? Increment? Where to store it?
  guesses++;
}





numGen();