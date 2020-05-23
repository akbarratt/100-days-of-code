// Declarations

let listBox = document.querySelector('#list-box');

let lis = document.querySelectorAll ('li');

let xButton = document.getElementsByClassName('x');

let xButtons = Array.from(xButton);

let xLink = document.createElement('a');
xLink.textContent = 'X';
xLink.className = 'x';
xLink.setAttribute('href', '');

console.log(xLink);

let list = document.querySelector('ul');

let resetButton = document.querySelector('#clear-tasks');

let addButton = document.querySelector('#add-task');

// Store input in a variable

let taskInputText = document.querySelector("#task-input").value;
// let taskInputText = document.getElementById("task-input").value;

// console.log(taskInputText);

// Add event listener to add button

addButton.addEventListener('click', addTask);

function addTask (newTask){
  // console.log(taskInputText);
  newTask = document.createElement('li');
  // Add input text to newly created <li>
  newTask.textContent = taskInputText;
  // Append x button to newly created <li>
  newTask.appendChild(xLink);
  // Add newly created li to ul
  list.appendChild(newTask);
  console.log(newTask);
  if (list.childElementCount > 0) {
    list.parentElement.style.visibility = 'visible';
  }
}

// TO DO xLink is only appended to the last <li> added.


// X button removes <li>

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

