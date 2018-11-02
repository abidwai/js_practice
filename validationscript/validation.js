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
        EventUtil.preventDefault(evt);
        validateName(userName);
        validateEmail(userEmail);
        validatePhone(userPhone);
        validateMessage(userMessage);
        submitForm();
    };

    let validateName = (userName) => {
        let field = userName;
        if (field.value.trim() === '') {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let validateEmail = (userEmail) => {
        let field = userEmail;
        if (field.value.trim() === '') {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let validatePhone = (userPhone) => {
        let field = userPhone;
        let fieldLength = field.value.length;
        if (field.value.trim() === '') {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }

        if (fieldLength >= 1 && fieldLength !== 10) {
            field.setAttribute("data-js-error", "*Should be 10 digit");
        } else {
            field.removeAttribute("data-js-error");
        }
    };

    let validateMessage = (userMessage) => {
        let field = userMessage;
        if (field.value.trim() === '') {
            field.setAttribute("data-js-required", "*Should not be empty");
        } else {
            field.setAttribute("data-js-required", "");
        }
    };

    let checkList = () => {
        let errorFields = document.querySelectorAll("[data-js-required]");
        let invalidFields = document.querySelectorAll("[data-js-error]");
        let flag;

        for (let errorField of errorFields) {
            let msg = errorField.getAttribute("data-js-required");

            if (msg.length < 1) {
                errorField.previousElementSibling.innerHTML = '';
                errorField.removeAttribute("data-js-required");
            } else {
                errorField.previousElementSibling.innerHTML = msg;
            }
        }

        for (let invalidField of invalidFields) {
            let msg = invalidField.getAttribute("data-js-error");
            if(msg.length > 1){
                invalidField.previousElementSibling.innerHTML = msg;
            }
        }


        if (userName.value.trim() && userPhone.value.length === 10 && userEmail.value.trim() && userMessage.value.trim()) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    };

    let submitForm = () => {
        let flag = checkList();
        if (flag) {
            form.submit();
        }
    };

    let numbersOnly = (evt) => {
        let charCode = EventUtil.getCharCode(evt);
        if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 &&
            !evt.ctrlKey) {
            EventUtil.preventDefault(evt);
        }
    };

    let alphabetsOnly = (evt) => {
        let charCode = EventUtil.getCharCode(evt);
        if (!/[A-Za-z ]/.test(String.fromCharCode(charCode))) {
            EventUtil.preventDefault(evt);
        }
    };

    let nonPasteFld = (evt) => {
       evt.preventDefault();
    }

    let setEvent = (evt) => {
        EventUtil.addHandler(form, "submit", validateForm);
        EventUtil.addHandler(userPhone, "keypress", numbersOnly);
        EventUtil.addHandler(userPhone, "paste", nonPasteFld);
        EventUtil.addHandler(userName, "keypress", alphabetsOnly);
        EventUtil.addHandler(userMessage, "keypress", alphabetsOnly);
    };


    return {
        init: init
    };

})();

EventUtil.addHandler(window, "load", formFields.init);