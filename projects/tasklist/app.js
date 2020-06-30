// Declarations

let listBox = document.querySelector('#list-box');

let xButton = document.getElementsByClassName('x');

let xButtons = Array.from(xButton);

let list = document.querySelector('ul');

let resetButton = document.querySelector('#clear-tasks');

let addButton = document.querySelector('#add-task');

let taskInput = document.querySelector("#task-input");

// Store input in a variable

let taskInputText = document.querySelector("#task-input").value;

// Add event listener to add button

addButton.addEventListener('click', addTask);

function addTask (e){
  if(taskInput.value === '') {
    alert('Add a task');
  } else {
  // console.log(taskInputText);
  const newTask = document.createElement('li');
  // Add input text to newly created <li>
  // newTask.textContent = taskInputText;
  newTask.appendChild(document.createTextNode(taskInput.value));
  // Create x button link
  let xLink = document.createElement('a');
  xLink.textContent = 'X';
  xLink.className = 'x';
  xLink.setAttribute('href', '');
  // Add event listener to make x button delete <li> on click
  xLink.addEventListener('click', deleteTask);
  // Append x link to newly created <li>
  newTask.appendChild(xLink);
  // Add newly created li to ul
  list.appendChild(newTask);
  console.log(newTask);
  // Clear input field
  taskInput.value = '';
  }
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
