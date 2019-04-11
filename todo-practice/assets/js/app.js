// select the elements
let eleClear = document.querySelector(".clear");
let eleDate = document.getElementById("date");
let eleList = document.querySelector(".list");
let eleInput = document.getElementById("input");

// variables
let LIST = [],
    id = 0;

// classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// show today's date
const options = {
    weekday: "long",
    month: "short",
    day: "numeric"
}

let today = new Date();

eleDate.innerHTML = today.toLocaleDateString("en-us", options);

// add todo
let addToDo = (todo, id, done, trash) => {
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
            <i class="far fa-trash-alt" job="delete" id="${id}"></i>
        </li>`;
    const position = "beforeend"
    eleList.insertAdjacentHTML(position, item);
}

// on enter press add todo
document.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        const todo = eleInput.value;
        if (todo) {
            addToDo(todo, id, false, false);
            LIST.push({
                name: todo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        eleInput.value = "";
    }
});

// complete todo
let completeToDo = (element) => {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove todo
let removeToDo = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

// target items created dynamiclly
eleList.addEventListener("click", (event) => {
    let element = event.target;
    let elementJOB = element.attributes.job.value;
    if (elementJOB === "complete") {
        completeToDo(element);
    } else if (elementJOB === "delete") {
        removeToDo(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

// get the items from localstorage
let data = localStorage.getItem("TODO");

// lload todo list to user's interface
let loadToDoList = (array) => {
    array.forEach((item) => {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// check if data is not empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadToDoList(LIST);
} else {
    LIST = [];
    id = 0;
}

// clear todo list
eleClear.addEventListener("click", () => {
    let storageEmpty = localStorage.hasOwnProperty("TODO");
    if (storageEmpty) {
        localStorage.clear();
        location.reload();
    }
});