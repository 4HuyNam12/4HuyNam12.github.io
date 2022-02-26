const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const formEl = document.querySelector(".task-form");
const taskEl = formEl.elements.task;
let li = document.createElement("li");

taskEl.focus();


const btnAdd = document.querySelector(".btn-add");
const taskNameEl = document.querySelector(".form-control");
const listEl = document.querySelector(".task-list");
renderTask(tasks);

function getRandomId() {
  return Math.floor(Math.random() * (10000 - 1000) + 1000);
}
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
  if (!taskNameEl.value) {
    alert("Please add a task");
    return false;
  }
  const newTask = {
    id: getRandomId(),
    name: taskEl.value,
  };
  tasks.push(newTask);

    taskEl.value = "";
    taskEl.focus();

    localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(tasks);
});
function renderTask(tasks = []) {
    listEl.innerHTML = '';
  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className =
      "list-group-item bg-light text-dark border border-light mb-4";
    const text = document.createTextNode(task.name);
    const buttonEdit = document.createElement("button");
    buttonEdit.className =
      "btn btn-primary position-absolute top-0 btn-edit h-100";
    buttonEdit.addEventListener("click", editTask());
    const iEdit = document.createElement("iEdit");
    iEdit.className = "bi bi-pencil-square";
    buttonEdit.append(iEdit);
    const buttonDelete = document.createElement("button");
    buttonDelete.className =
      "btn btn-danger position-absolute top-0 end-0 h-100 btn-delete ";
    buttonDelete.addEventListener("click", deleteTask());
    const iDel = document.createElement("iDel");
    iDel.className = "bi bi-trash";
    buttonDelete.append(iDel);
    li.append(text, buttonEdit, buttonDelete);
    listEl.append(li);
  });
}
function updateSummary() {
  const text =
    tasks.length == 0
      ? "No task , Add one :D"
      : `  You have <span class="number fw-bold">${tasks.length}</span> pending tasks
              <button onClick ="tasks.length=0;localStorage.removeItem('tasks');renderList();"class="btn btn-clear btn-danger">clearAll</button>`;
  summaryEl.innerHTML = text;
}
function editTask(id = 0) {
    for (let i = 0; i < tasks.length; i++){
        
    }
    taskEl.value =
    console.log(id);
}
function deleteTask(id=0) {
   for (let i = 0; i < tasks.length; i++) {
     if (tasks[i].id === id) {
       tasks.splice(i, 1);
     }
   }
   localStorage.setItem("tasks", JSON.stringify(tasks));
   listEl.removeChild(li);
   updateSummary();
}