const tasks =JSON.parse(localStorage.getItem("tasks")) || [];

const formEl = document.querySelector(".task-form");
const taskEl = formEl.elements.task;
const listEl = document.querySelector(".task-list");
taskEl.focus();
const summaryEl = document.querySelector(".summary-text");
updateSummary();


function getRandomId() {
    return Math.floor(Math.random() * (10000 - 1000) + 1000);
}

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = taskEl.value;
    const newTask = {
        id: getRandomId(),
        text,
    }
    tasks.push(newTask);
    taskEl.value = "";
    taskEl.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderList();
});
function renderList() {
    listEl.innerHTML = "";
    
    
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "list-group-item bg-light text-dark border border-light mb-4";
        const text = document.createTextNode(task.text);
        const buttonEdit = document.createElement("button");
        buttonEdit.className =
            "btn btn-primary position-absolute top-0 btn-edit h-100";
        buttonEdit.addEventListener("click", function () {
            taskEl.focus();
            const id = task.id;
            for (let i = 0; i < tasks.length; i++) {
                if(tasks[i].id === id) {
                    taskEl.value = tasks[i].text;
                }
            }
        });
        const iEdit = document.createElement("iEdit");
        iEdit.className = "bi bi-pencil-square";
        buttonEdit.append(iEdit);
        const buttonDelete = document.createElement("button");
        buttonDelete.className = 'btn btn-danger position-absolute top-0 end-0 h-100 btn-delete ';
        buttonDelete.addEventListener("click", function () {
            const id = task.id;
            
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === id) {
                    tasks.splice(i, 1);
                }
            }
            localStorage.setItem("tasks", JSON.stringify(tasks));
            listEl.removeChild(li);
            updateSummary();
            
        });
        const iDel = document.createElement("iDel");
        iDel.className = "bi bi-trash";
        buttonDelete.append(iDel);
        li.append(text, buttonEdit, buttonDelete);
        listEl.append(li);
    })
    updateSummary();
}
function updateSummary() {
    const text =
      tasks.length == 0
        ? "No task , Add one :D"
        : `  You have <span class="number fw-bold">${tasks.length}</span> pending tasks
              <button onClick ="tasks.length=0;localStorage.removeItem('tasks');renderList();"class="btn btn-clear btn-danger">clearAll</button>`;
    summaryEl.innerHTML = text;
}