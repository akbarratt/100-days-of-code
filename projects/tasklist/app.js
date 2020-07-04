// Declarations
let listBox = document.querySelector('#list-box');
let xButton = document.getElementsByClassName('x');
let xButtons = Array.from(xButton);
let list = document.querySelector('ul');
let clearButton = document.querySelector('#clear-tasks');
let addButton = document.querySelector('#add-task');
let taskInput = document.querySelector("#task-input");

// Store input in a variable
let taskInputText = document.querySelector("#task-input").value;

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // Add "add task" event listener to add button
  addButton.addEventListener('click', addTask);
  // Add "remove task" event listener to X button
  xButtons.forEach(function(a, index){
    a.addEventListener('click', deleteTask);
    })
  clearButton.addEventListener('click' ,clearList);
}

// Add task function
function addTask (e){
  if(taskInput.value === '') {
    alert('Add a task');
  } else {
  const newTask = document.createElement('li');
  // Add input text to newly created <li>
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
  // When task list is empty, hide list container.
  checkList();
}

// Delete task function
function deleteTask(e) {
  e.preventDefault();
  if (e.target.classList.contains('x')){
    e.target.parentElement.remove();
  }
  // When task list is empty, hide list container.
  checkList();
}

// Clear List function
function clearList (e) {
  let clearConfirm = confirm ('Do you really want to clear all tasks?');
  if (clearConfirm === true) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  // When task list is empty, hide list container.
  checkList();
}

function checkList() {
  if (list.childElementCount === 0) {
    list.parentElement.style.visibility = 'hidden';
  } else {
      list.parentElement.style.visibility = 'visible';
  }
}

// To Do:
// Bug: long tasks don't wrap!
// Styles ugly.