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
    let btnNumFind = document.getElementById("btnFind");

    let processString = () => {
        // ex. abcdhf348 57jj jj8
        paraResult.innerHTML = "";
        let input = txtNumber.value;
        let result = input.match(/\d+/g);
        if (result !== null) {
            paraResult.innerHTML += [...result];
        }
    };

    let setEvents = () => {
        // find nmbers
        EventUtil.addHandler(btnNumFind, "click", processString);
    };
    setEvents();
};

EventUtil.addHandler(window, "load", init);