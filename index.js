const list = document.querySelector(".container-todo");

const apiUrl = "https://jsonplaceholder.typicode.com/todos";
async function fetchTodos() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const todos = await response.json();
    displayTodo(todos);

    console.log("Fetched Todos:", todos);
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
}

fetchTodos();

const displayTodo = (todos) => {
  //   list.innerHTML = "";
  todos.forEach((todo) => {
    const items = document.createElement("div");
    items.classList.add("todo");

    items.innerHTML = ` 
 


    <div class="todo-complete ${todo.completed ? "completed" : ""}">
    <svg class="w-6 h-6 text-gray-800 dark:text-white   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  </div>

      <p class="todo-title">${todo.title}</p>



    
    `;

    if (todo.completed) {
      items.style.opacity = ".5";
    }
    list.appendChild(items);
  });
};

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("time").innerHTML = timeString;
}

setInterval(updateTime, 1000);

updateTime();
