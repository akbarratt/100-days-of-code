// Declarations
let xButton = document.getElementsByClassName('x');

let xButtons = Array.from(xButton);

let list = document.querySelector('ul');

let addButton = document.querySelector('#add-task');

// Store input in a variable

// let taskInputText = document.querySelector("#task-input").value;
let taskInputText = document.querySelector("#task-input");
console.log(taskInputText);

// Add event listener to add button

addButton.addEventListener('click', addTask);

function addTask (newTask){
  // e.preventDefault;
  // console.log(taskInputText);
  newTask = document.createElement('li');
  newTask.appendChild(taskInputText);
  // newTask.setAttribute() + '<a class = "x" href="">X</a>'


  // Add newly created li to ul
  list.appendChild(newTask);
  console.log(newTask);
  console.log(taskInputText);
}


// X button removes <li> functionality.

xButtons.forEach(function(a, index){
  a.addEventListener('click', deleteTask);
})

function deleteTask(e) {
  e.preventDefault();
  if (e.target.classList.contains('x')){
    e.target.parentElement.remove();
  }
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