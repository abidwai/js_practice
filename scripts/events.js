/**
 * handle cross browser compatibility
 */
var EventUtil = {
    addHandler: (element, eventType, handler) => {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventType, handler, false);
        } else {
            element["on" + eventType] = handler;
        }
    },
    removeHandler: (element, eventType, handler) => {
        if (element.removeEventListener) {
            element.removeEventListener(eventType, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventType, handler, false);
        } else {
            element["on" + eventType] = null;
        }
    },
    getEvent: (event) => {
        return event ? event : window.event;
    },
    getTarget: (event) => {
        return event.target || event.srcElement;
    },
    getCharCode: (event) => {
        if (typeof event.charCode === "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}

var init = () => {
    var btnSave = document.getElementById("btn-save");
    var saveHandler = (event) => {
        var event = EventUtil.getEvent(event);
        console.log(event.eventPhase);
    }

    var body = document.getElementsByTagName('body')[0];
    var testHnadler = (event) => {
        var event = EventUtil.getEvent(event);
        console.log(event.eventPhase);
    }

    var input = document.getElementById("input");
    var inputHandler = (event) => {
        var event = EventUtil.getEvent(event);
        var charCode = EventUtil.getCharCode(event);
        console.log(charCode);
    }

    var setEvents = () => {
        // EventUtil.addHandler(btnSave, "click", saveHandler);
        // EventUtil.addHandler(body, "click", testHnadler);
        EventUtil.addHandler(input, "keypress", inputHandler);
    }
    setEvents();
}

EventUtil.addHandler(window, "load", init);