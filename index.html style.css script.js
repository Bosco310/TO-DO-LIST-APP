<!DOCTYPE html>
<html>
<head>
<title>Todo List</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>My Todo List</h1>

<input type="text" id="taskInput" placeholder="Enter a task">
<button onclick="addTask()">Add</button>

<ul id="taskList"></ul>

<script src="script.js"></script>

</body>
</html>
function addTask() {

let taskInput = document.getElementById("taskInput");
let task = taskInput.value;

let li = document.createElement("li");
li.textContent = task;

document.getElementById("taskList").appendChild(li);

taskInput.value = "";

body{
font-family: Arial;
text-align: center;
}

input{
padding: 10px;
}

button{
padding: 10px;
}

li{
margin: 10px;
}
