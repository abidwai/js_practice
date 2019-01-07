let EventUtil = {
    addHandler: (element, eventType, handler) => {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventType, handler, false);
        } else {
            element["on" + eventType] = handler;
        }
    }
}

let init = () => {
    let txtNumber = document.getElementById("txtNumber");
    let paraResult = document.getElementById("paraResult");
    let button = document.getElementById("btnFind");

    let processString = () => {
        let input = txtNumber.value;
        let result = input.match(/\d+/g);
        if (result !== null) {
            paraResult.innerHTML += [...result];
        }
    };

    let setEvents = () => {
        EventUtil.addHandler(button, "click", processString);
    };
    setEvents();
};

EventUtil.addHandler(window, "load", init);