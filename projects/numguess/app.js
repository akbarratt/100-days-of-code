// ____________
// Declarations

// User input (need to ensure this only accepts a value 1-10)
const guessInput = document.getElementById('guess-input');
// Submit button
const submitBtn = document.getElementById('guess-value'); // this doesn't seem semantic to me
// Win condition span
const results = document.getElementById('results');
// Retry container
const retryCont = document.getElementById('retry');
// Retry button
const retryBtn = document.getElementById('retry-btn');

//_______________
//Getting started (on page load/refresh)

// Initialize generated number
let generatedNumber;
// Guesses baseline
let guesses = 0;
// Run number generation function
numGen();
// Testing: Log generatedNubmer
console.log('Generated number: ' + generatedNumber);

//_________________________
// Load all event listeners
// INSERT HERE

// Submit event handler

submitBtn.addEventListener('click', submitGuess);
retryBtn.addEventListener('click', refresh);

//__________
// Functions

// Number generation function
function numGen() {
  generatedNumber = Math.ceil((Math.random() * 10));
}

// Refresh page button
function refresh(){
  window.location.reload();
}

// Display retry on game over
function retry() {
  retryCont.style.display = 'block';
}

// Submit guess event handler
function submitGuess(e) {
  let guess = parseInt(guessInput.value);
  // parseInt should be sufficient for now because it rounds up, but eventually need to disallow decimals
  console.log('User input guess:' + guess);
  // If not a number 1-10, error
  if(guess > 10 || guess < 1 || isNaN(guess)){
    console.log('Number must be 1-10.')
    results.textContent = 'Number must be 1-10. '+ (3-guesses) + ' guess(es) remaining.';
  } else if (guesses === null) {
    results.textContent = 'You already won! '
  } else {
    game();
  }
}

// Number guessing game
function game(){
  let guess = parseInt(guessInput.value);
  if (guess !== generatedNumber) {
    /*testing*/console.log('incorrect guess');
    guesses++
    results.textContent = 'Incorrect. ' + (3-guesses) + ' guess(es) remaining.';
    /*testing*/console.log('Number of guesses:' + guesses);
  } else if (guess === generatedNumber) {
    /*testing*/console.log('correct');
    results.textContent = 'Correct! You win!';
    retry();
    guesses = null;
  } 
  if (guesses >=3){
    /*testing*/console.log('Game Over');
    results.textContent = 'Sorry, game over!';
    generatedNumber = undefined;
    retry();
  }
}

// TO DO:
// - Reset button
// - I could pull in some functions to deal with the plurals / negative guesses but that could be complicated and overkill.
// - How to tell what the correct answer was while ending the game and not allowing for further guesses? Would need to change the 'undefined' workaround in place now.
// - FEATURE: show which numbers have already been guessed and prevent guessing the same number twice (array?)
// - NOTE: David thinks the HTML element can handle validation and require input.
