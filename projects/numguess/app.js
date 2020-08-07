// Currently: Abstracting message into its own function.

// ____________
// Declarations

// User input (need to ensure this only accepts a value 1-10)
const guessInput = document.getElementById('guess-input');
// Submit button
const submitBtn = document.getElementById('guess-btn'); // this doesn't seem semantic to me
// Message p **NOTE: this replaces 'results'**
const message = document.getElementById('message');
// Retry container
const retryCont = document.getElementById('retry');
// Retry button
const retryBtn = document.getElementById('retry-btn');
// Min number
const minNum = document.querySelector('.min-num');
// Max number
const maxNum = document.querySelector('.max-num');

//_______________
//Getting started (on page load/refresh)

// Initialize generated number
let generatedNumber;
// Guesses baseline
let guesses = 3;
// Run number generation function
numGen();
// Set min and max number
let min = 1;
let max = 10; 
minNum.textContent = min;

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

// Set message
function setMessage (msg, color){
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
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
  // parseInt should be sufficient for now because it rounds up, but eventually need to disallow decimals
  let guess = parseInt(guessInput.value);
  // Check input for errors
  if(guess > max || guess < min || isNaN(guess)){
    guessInput.value = '';
    setMessage(`Number must be ${min}-${max}. ${guesses} guess(es) remaining.`, 'red');
  // If all clear, run game function.
  } else {
    game();
  }
}

// Number guessing game function
function game(){
  // Convert user input string to whole number, rounding up
  let guess = parseInt(guessInput.value);
  //Incorrect guess
  if (guess !== generatedNumber && guesses > 0) {
    guesses--;
    guessInput.value = '';
    setMessage(`Incorrect. ${guesses} guess(es) remaining.`, 'red');
  // Win condition
  } else if (guess === generatedNumber) {
    setMessage(`The correct answer was ${generatedNumber}. You win!`, 'green');
    guessInput.disabled = true;
    retry();
  }
  // Lose condition
  if (guesses <= 0){
    setMessage(`Sorry, game over! The correct answer was ${generatedNumber}.`, 'red');
    guessInput.disabled = true;
    retry();
  }
}

// ________________
// TO DO:
// - Reset button
// - I could pull in some functions to deal with the plurals / negative guesses but that could be complicated and overkill.
// - How to tell what the correct answer was while ending the game and not allowing for further guesses? Would need to change the 'undefined' workaround in place now.
// - FEATURE: show which numbers have already been guessed and prevent guessing the same number twice (array?)
// - NOTE: David thinks the HTML element can handle validation and require input.
// - FEATURE: Hint when you get to your last guess about whether it's high or lower than your current guess.
// - NOTE: Most of my problems were solved by counting down the guesses rather than starting from 0 and then counting up.
// - FEATURE: Could let user input their own min and max values and give them a percentage of success.

//_________
// TUTORIAL NOTES
// - Min and max number values are dynamic (hence the spans)
// - Brad abstracted the results.textContent into its own function setMessage(). That was the point of the blank p.message.
// - Disable input
// - Changed input border color with guessInput.style.borderColor. Also changed message colors by adding a second parameter.
// - Forgot to use template literal
// - -= vs -- ?
// - Brad did the lose case by nesting it inside of the incorect guess, rather than placing it outside of the conditional.
// - Brad abstracted the game over condition (SIGH) and used a ternary operator.
// - Rather than having a new button, can add a new class and event listener to the same button and just change the value.
// - Append class: +=
// - Click vs mousedown