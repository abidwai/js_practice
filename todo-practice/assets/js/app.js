// select the elements
const clearEle = document.querySelector(".clear");
const dateEle = document.getElementById("date");
const listEle = document.querySelector(".list");
const inputEle = document.getElementById("input");

// variables
let LIST = [],
    id = 0;

// classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough"


// set date
const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
}
const date = new Date();
dateEle.innerHTML = date.toLocaleDateString("en-us", options);

// what it does: add todo
let addToDo = (todo, id, done, trash) => {
    if (trash) {
        return;
    }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `
    <li class="item">
        <div>
            <i class="far ${DONE}" job="complete" id=${id}></i>
            <span class="text ${LINE}">${todo}</span>
        </div>
        <i class="far fa-trash-alt" job="delete" id=${id}></i>
    </li>`;
    const position = "beforeend";
    listEle.insertAdjacentHTML(position, item);
}

// what it does: on keyup it will check enter key and add todo
document.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        const todo = inputEle.value.trim();
        if (todo) {
            addToDo(todo, id, false, false);
            LIST.push({
                id: id,
                name: todo,
                done: false,
                trash: false
            });
            localStorage.setItem("todo", JSON.stringify(LIST));
            id++;
        }
        inputEle.value = "";
    }
});

// what it does: change the status of todo
let completeToDo = (element) => {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// what it does: remove todo
let removeToDo = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

// what it does: add event to dynamiclayy added item
listEle.addEventListener("click", (event) => {
    const element = event.target;
    const elementJOB = element.attributes.job.value;
    if (elementJOB === 'complete') {
        completeToDo(element);
    } else if (elementJOB === 'delete') {
        removeToDo(element);
    }
    localStorage.setItem("todo", JSON.stringify(LIST));
});

// what it does: load todo list from localstorage
let loadToDoList = (array) => {
    array.forEach((item) => {
        addToDo(item.name, item.id, item.done, item.trash);
    });
};

// what it does: check localStorage empty or not
let data = localStorage.getItem("todo");
if (data) {
    LIST = JSON.parse(data);
    loadToDoList(LIST);
    id = LIST.length;
} else {
    LIST = [];
    id = 0;
}

// what it does: clear the local storage and reload the page
clearEle.addEventListener("click", () => {
    let hasProp = localStorage.hasOwnProperty("todo");
    if (hasProp) {
        localStorage.clear();
        location.reload();
    }
});