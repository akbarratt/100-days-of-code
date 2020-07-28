// ____________
// Declarations

// Insert answer for testing purposes
const testnum = document.getElementById('testnum');
// User input (need to ensure this only accepts a value 1-10)
const guessInput = document.getElementById('guess-input');
// Submit button
const submitBtn = document.getElementById('guess-value'); // this doesn't seem semantic to me

//_______________
//Getting started (on page load/refresh)

// Initialize generated number
let generatedNumber;
// Guesses baseline
let guesses = 0;
// Run number generation function
numGen();

//_________________________
// Load all event listeners
// INSERT HERE

// Submit event handler

submitBtn.addEventListener('click', submitGuess);

//__________
// Functions

// Number generation function
function numGen() {
  generatedNumber = Math.ceil((Math.random() * 10));
  testnum.textContent = generatedNumber;
  console.log(typeof(generatedNumber));
}

// Submit guess event handler
function submitGuess(e) {
  let guess = parseInt(guessInput.value);
  // parseInt should be sufficient for now because it rounds up
  console.log('User input guess:' + guess);
  // If not a number 1-10, error
  if(guess > 10 || guess < 1){
    console.log('Number must be 1-10.')
  } else if (guess !== generatedNumber) {
    console.log('incorrect guess', generatedNumber);
    guesses++
    console.log('Number of guesses:' + guesses);
  } else {
    console.log('correct');
  }
  e.preventDefault();
}



