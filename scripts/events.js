/**
 * handle cross browser compatibility
 */
var EventUtil = {
    addHandler: function(element, eventType, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventType, handler, false);
        } else {
            element["on" + eventType] = handler;
        }
    },
    removeHandler: function(element, eventType, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(eventType, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventType, handler, false);
        } else {
            element["on" + eventType] = null;
        }
    }
}

var btnSave = document.getElementById("btn-save");

var saveHandler = function(e) {
    alert(e.type);
}

// EventUtil.addHandler(btnSave, "click", saveHandler);

var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    alert(event.eventPhase); //2
};
document.body.addEventListener("click", function(event) {
    alert(event.eventPhase); //1
}, true);
document.body.onclick = function(event) {
    alert(event.eventPhase); //3
};