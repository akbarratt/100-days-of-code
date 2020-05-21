// Declarations
let xButton = document.getElementsByClassName('x');

let xButtons = Array.from(xButton);

let list = document.querySelector('ul');

// X button removes <li> functionality.

xButtons.forEach(function(a, index){
  a.addEventListener('click', deleteTask);
})

function deleteTask(e) {
  e.preventDefault();
  if (e.target.classList.contains('x')){
    console.log('Delete task.')
    e.target.parentElement.remove();
  }
  lis = document.querySelectorAll ('li');
  console.log(lis);
  // When task list is empty, hide list container.
  if (list.childElementCount === 0) {
    list.parentElement.style.visibility = 'hidden';
    console.log('No children of UL');
  }
}



let listBox = document.querySelector('#list-box');
let lis = document.querySelectorAll ('li');
// console.log(lis);





// if listBox.childElement.childElement === null {
//   listBox.style.visibility="hidden";
// };