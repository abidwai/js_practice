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
const options = { weekday: "long", month: "short", day: "numeric" }
const today = new Date();

dateEle.innerHTML = today.toLocaleDateString("en-us", options);

// add todo
let addToDo = function(todo, id, done, trash) {
    if (trash) {
        return;
    }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    let item = `
            <li class="item">
                <i class="fa ${DONE}" job="complete" id="${id}"></i>
                <span class="text ${LINE}">${todo}</span>
                <i class="fa fa-trash-alt" job="delete" id=${id}>trash</i>
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
            id++;
        }
        inputEle.value = "";
    }
});