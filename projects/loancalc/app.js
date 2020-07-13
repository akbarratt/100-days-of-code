// Variable declarations

// None of this is working. HTML collection vs node list? No, Brad said it makes no difference.

const amtInput = parseFloat(document.querySelectorAll('#amt-input').value);
// const intInput = document.querySelectorAll('#int-input').textContent;
const intInput = document.querySelectorAll('#int-input').value;
const yrsInput = document.querySelectorAll('#years-input').value;

document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  console.log("submit");
  calcMonthlyPayment();
  e.preventDefault(); 
  console.log(parseFloat(intInput));
}

function calcMonthlyPayment() {
  let monthlyPayment = amtInput / 12;
  console.log(monthlyPayment);
}
