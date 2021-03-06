// Variable declarations

// Any work with the values have to be done inside the function because it requires user input.
const amtInput = document.querySelector('#amt-input');
const intInput = document.querySelector('#int-input');
const yrsInput = document.querySelector('#years-input');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

// Listen for form submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('result-cont').style.display = 'none';
  
  // Show loader on click
  document.getElementById('loader').style.display = 'block';

  // Timeout
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate results on submit
function calculateResults() {
  // How do I return an error? Because running any data type through parseFloat will force it to be a number.
  const principal = parseFloat(amtInput.value);
  const calculatedInterest = parseFloat(intInput.value) / 100 / 12;
  const calculatedPayments = parseFloat(yrsInput.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);
  
  // console.log(principal);
  // console.log(calculatedInterest);
  // console.log(calculatedPayments);
  // console.log(monthly);

  if(isFinite(monthly)) {
    monthlyPayment.innerHTML = monthly.toFixed(2);
    totalPayment.innerHTML = (monthly * calculatedPayments).toFixed(2);
    totalInterest.innerHTML = ((monthly * calculatedPayments)-principal).toFixed(2);
    // Show results, hide loader
    document.getElementById('result-cont').style.display = 'block';
    document.getElementById('loader').style.display = 'none';
  } else {
    showError('Please check your numbers.')
  }
}

// In this case it seems like isFinite serves the function I was trying to do, which was check whether the result of the form input was a number.

// Show Error
function showError(error) {
  // Hide loader, results
  document.getElementById('result-cont').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
  
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('#calc-cont');
  const heading = document.querySelector('.heading')

  // Add class
  errorDiv.className = 'alert';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // How does it know what text to pass in for 'error'?

  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  
  // Clear error after 3 secords
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}


// To Do:
// Input field of type "number" does not allow a decimal and trying to place one results in a browser error.