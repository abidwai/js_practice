/**
 * handle cross browser comaptibility issue
 */
let EventUtil = {
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
let formFields = ((event) => {
    let evt = EventUtil.getEvent(event);
    let form = document.getElementById("contactForm");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");
    let userMessage = document.getElementById("userMessage");

    let init = (evt) => {
        setEvent();
    };

    let validateForm = (evt) => {
        evt.preventDefault();
        validateName(userName);
        validateEmail(userEmail);
        validatePhone(userPhone);
        validateMessage(userMessage);
        submitForm();
    };

    let validateName = (userName) => {
        let field = userName;
        if (!field.value.trim()) {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let validateEmail = (userEmail) => {
        let field = userEmail;
        if (!field.value.trim()) {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let validatePhone = (userPhone) => {
        let field = userPhone;
        if (!field.value.trim()) {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let validateMessage = (userMessage) => {
        let field = userMessage;
        if (!field.value.trim()) {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let checkStatus = () => {
        let errorFields = document.querySelectorAll("[data-js-required]");
        let msg, flag;

        for (let item of errorFields) {
            msg = item.getAttribute("data-js-required");
            if (msg !== null) {
                item.previousElementSibling.innerHTML = msg;
                flag = false;
            } else if (msg == null) {
                item.removeAttribute("data-js-required");
                flag = true;
            }
        }

        return flag;
    };

    let submitForm = () => {
        let flag = checkStatus();
        console.log(flag);
        if (flag) {
            form.submit();
        }
    };

    let setEvent = (evt) => {
        EventUtil.addHandler(form, "submit", validateForm);
    };

    return {
        init: init
    };

})();

EventUtil.addHandler(window, "load", formFields.init);