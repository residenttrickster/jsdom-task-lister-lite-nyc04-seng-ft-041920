document.addEventListener("DOMContentLoaded", () => {
//your code goes here
const taskContainer = document.querySelector("#tasks")

const newTask = document.querySelector("#create-task-form");

newTask.addEventListener("submit", function(event) {
  event.preventDefault(); //stop form from POSTING

  const textInput = event.target.querySelector("#new-task-description")
  const userSubmit = textInput.value

  const createTask = document.createElement("li")
  createTask.textContent = userSubmit

  taskContainer.appendChild(createTask)
})
});


// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const tasks = document.querySelector('#tasks')

//   const createTaskForm = document.querySelector('#create-task-form');

//   createTaskForm.addEventListener('submit', function (event) {
//      //stop form from POSTING
//     event.preventDefault();  

//     const newTasks = event.target.querySelector('#new-task-description')
//     const userSubmit = newTasks.value 

//     const tasksPTag = document.createElement('li')
//     tasksPTag.textContent = userSubmit
//     tasks.appendChild(tasksPTag)
//     // console.log(event.target) //form
//   })
// })