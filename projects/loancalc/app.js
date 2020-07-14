// Variable declarations

// Any work with the values have to be done inside the function because it requires user input.
// const amtInput = document.querySelector('#amt-input');
const intInput = document.querySelector('#int-input');
const yrsInput = document.querySelector('#years-input');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

// Listen for form submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate results on submit
function calculateResults(e) {
  e.preventDefault();
  // if amtInput
  // calcMonthlyPayment();
  // calcTotalPayment();
  // calcTotalInterest();
  let amtInput = document.querySelector('#amt-input');
  let principal = parseFloat(amtInput.value);
  console.log(principal);
  console.log(principal.typeof);
}

function calcMonthlyPayment() {
  // let monthlyPayment = amtInput.value / 12;
  // console.log(monthlyPayment);
}
