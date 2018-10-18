/**
 * handle cross browser comaptibility issue
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
    },
    preventDefault: (event) => {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: (event) => {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
};


/** 
 * form field validation
 */
var formFields = ((event) => {
    var evt = EventUtil.getEvent(event);
    var form = document.getElementById("contactForm");

    var txtFlds = document.querySelectorAll(".js-chkempty");

    var init = (evt) => {
        setEvent();
    };

    var validateFields = () => {
        var status = checkEmpty();
        if (status) {
            return true;
        } else {
            return false;
        }
    };

    var checkEmpty = () => {
        for (txtFld of txtFlds) {
            console.log(txtFld + " : " + txtFld.value.trim() + "," + txtFld.value.trim().length);
            if (txtFld.value.trim().length > 0) {
                return true;
            } else {
                return false;
            }
        }
    };

    var setEvent = (evt) => {
        EventUtil.addHandler(form, "submit", (evt) => {
            evt.preventDefault();
            var status = validateFields();
            if (status) {
                form.submit();
            } else {
                evt.preventDefault();
            }
        });
    };

    return {
        init: init
    };

})();

EventUtil.addHandler(window, "load", formFields.init);