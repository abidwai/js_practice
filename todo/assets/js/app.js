// Select the elements
const clearEle = document.querySelector(".clear");
const dateEle = document.getElementById("date");
const listEle = document.querySelector(".list");
const inputEle = document.getElementById("input");

// Variables
let LIST = [],
    id = 0;

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// Show todays date
const options = {
    weekday: "long",
    month: "short",
    day: "numeric"
}
const today = new Date();

dateEle.innerHTML = today.toLocaleDateString("en-us", options);

// Get the items from localstorage
let data = localStorage.getItem("TODO");

// Check if data is not empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadToDoList(LIST);
} else {
    LIST = [];
    id = 0;
}

// Laod items to the user's interface
function loadToDoList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// add todo
function addToDo(todo, id, done, trash) {
    if (trash) {
        return;
    }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    let item = `
            <li class="item">
                <div>
                    <i class="far ${DONE}" job="complete" id="${id}"></i>
                    <span class="text ${LINE}">${todo}</span>
                </div>
                <i class="far fa-trash-alt" job="delete" id=${id}></i>
            </li>
            `;
    let position = "beforeend";
    listEle.insertAdjacentHTML(position, item);
}

// on enter press add todo
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const todo = inputEle.value;
        if (todo) {
            addToDo(todo, id, false, false);
            LIST.push({
                name: todo,
                id: id,
                done: false,
                trash: false
            });
            // add item to localstorage (this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        inputEle.value = "";
    }
});

// Complete todo

let completeToDo = function(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove todo
let removeToDO = function(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// Target items created dynamically
listEle.addEventListener("click", function(event) {
    const element = event.target; // return clicked element inside list
    const elementJOB = element.attributes.job.value; // return complete or delete

    if (elementJOB === "complete") {
        completeToDo(element);
    } else if (elementJOB === "delete") {
        removeToDO(element);
    }
    // add item to localstorage (this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

// Clear todo list
clearEle.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});