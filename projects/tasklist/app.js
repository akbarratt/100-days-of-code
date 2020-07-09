// Declarations
let listBox = document.querySelector('#list-box');
let xButton = document.getElementsByClassName('x');
let xButtons = Array.from(xButton);
let list = document.querySelector('ul');
let clearButton = document.querySelector('#clear-tasks');
let addButton = document.querySelector('#add-task');
let taskInput = document.querySelector("#task-input");
let filter = document.querySelector("#filter");
// Store input in a variable
let taskInputText = document.querySelector("#task-input").value;

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add new LI on click
  addButton.addEventListener('click', addTask);
  // Click x button to remove tasks
  xButtons.forEach(function(a, index){
    a.addEventListener('click', deleteTask);
    })
  // Clear all tasks on click of clear button
  clearButton.addEventListener('click',clearList);
  // Filter functionality
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    const newTask = document.createElement('li');
    // Add input text to newly created <li>
    newTask.appendChild(document.createTextNode(task));
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
    checkList();
  });
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

  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input field
  taskInput.value = '';
  }
  // When task list is empty, hide list container.
  checkList();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task function
function deleteTask(e) {
  e.preventDefault();
  if (e.target.classList.contains('x')){
    e.target.parentElement.remove();
    //Remove from local storage
    removeTaskFromLocalStorage(e.target.parentElement);
  }
  // When task list is empty, hide list container.
  checkList();
}

// Remove from local storage
// Why doesn't this work? More deviations from tutorial. Text content adds that 'X'.
function removeTaskFromLocalStorage(taskItem) {
  console.log(taskItem.textContent);
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task + 'X'){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear List function
function clearList (e) {
  let clearConfirm = confirm ('Do you really want to clear all tasks?');
  if (clearConfirm === true) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  clearTasksFromLocalStorage();
  // When task list is empty, hide list container.
  checkList();
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}


function checkList() {
  if (list.childElementCount === 0) {
    list.parentElement.style.visibility = 'hidden';
  } else {
      list.parentElement.style.visibility = 'visible';
  }
}

function filterTasks (e) {
  let text = e.target.value.toLowerCase();
  document.getElementsByTagName('li');
  console.log(document.getElementsByTagName('li'));
}

function filterTasks (e) {
  let text = e.target.value.toLowerCase();
  let tasksArray = Array.from(document.getElementsByTagName('li'));
  tasksArray.forEach(function(eachTask) {
    const item = eachTask.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
    eachTask.style.display = 'block';
    } else {
    eachTask.style.display = 'none';
    }
  })
}

// Putting above function in just messed up all my LI styling. Possibly because it's an HTMLcollection? Or possibly because the close button is in text. But searching 'x' doesn't bring up all tasks.

// Brad did this as a node list with querySelectorAll. You can't run .forEach on an HTML collection. Didn't want to bother adding a new class to the list items so converted HMTLcollection to an array instead. Buggy.



// To Do:
// Bug: long tasks don't wrap!
// Styles ugly.
// Bug: when using filter function LI styles change.
// Bug: resizing the browser does strange things to the input fields.
// Need to change delete button from text because it's getting pulled in any time I call text content.

