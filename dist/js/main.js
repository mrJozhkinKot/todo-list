//Define UI Vars
const form = document.querySelector ('.task-form');
const taskInput = document.querySelector ('.task');
const taskList = document.querySelector ('.list');
const clearBtn = document.querySelector ('.clear-tasks');
const filter = document.querySelector ('.filter');

//Load all event listener
loadEventListeners ();

function loadEventListeners () {
  form.addEventListener ('submit', addTask);
  taskList.addEventListener ('click', removeTask);
  clearBtn.addEventListener ('click', clearTasks);
  filter.addEventListener ('keyup', filterTasks);
    }

//Add Task
function addTask(e) {
 if (taskInput.value !== '') {
   const li = document.createElement ('li');
  li.appendChild (document.createTextNode (taskInput.value));
   li.className = 'list-item';  
  const link = document.createElement('a');
  link.innerHTML = '<i class="fas fa-times-circle"></i>';
  link.className = 'delete-item';  
  li.appendChild (link);
  taskList.appendChild (li);
  taskInput.value = '';
 }
  e.preventDefault();
  }

//Remove Task

function removeTask (e) {
  if (e.target.parentElement.classList.contains ('delete-item')) {
    e.target.parentElement.parentElement.remove ();
  } 
}

//Clear Tasks

function clearTasks () {
  while (taskList.firstChild) {
    taskList.removeChild (taskList.firstChild);
  }
}

//Filter Tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.list-item').forEach(function (task) {
    const item = task.firstChild.textContent;
   if (item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'flex';
  }   else {
    task.style.display = 'none';
  } 
  } );
      } 





