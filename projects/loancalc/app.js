// Variable declarations

// None of this is working. HTML collection vs node list?

const amtInput = parseFloat(document.querySelectorAll('#amt-input').value);
const intInput = document.querySelectorAll('#int-input').textContent;
const yrsInput = document.querySelectorAll('#years-input').textContent;

document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  console.log("submit");
  calcMonthlyPayment();
  e.preventDefault(); 
  console.log(document.querySelectorAll('#amt-input').value)
}

function calcMonthlyPayment() {
  let monthlyPayment = amtInput / 12;
  console.log(monthlyPayment);
}
