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
    getEvent: (event) => {
        return event ? event : window.event;
    },
    getTarget: (event) => {
        return event.target || event.srcElement;
    },
    removeHandler: (element, eventType, handler) => {
        if (element.removeEventListener) {
            element.removeEventListener(eventType, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventType, handler, false);
        } else {
            element["on" + eventType] = null;
        }
    }
}

var init = () => {
    var btnSave = document.getElementById("btn-save");

    var saveHandler = (e) => {
        var event = EventUtil.getEvent(event);
        console.log(event.eventPhase);
    }

    var body = document.getElementsByTagName('body')[0];

    var testHnadler = (e) => {
        var event = EventUtil.getEvent(event);
        console.log(event.eventPhase);
    }
    var setEvents = () => {

        EventUtil.addHandler(btnSave, "click", saveHandler);
        EventUtil.addHandler(body, "click", testHnadler);
    }
    setEvents();
}

EventUtil.addHandler(window, "load", init);