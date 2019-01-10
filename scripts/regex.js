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
    // validation script
    const inputs = document.querySelectorAll("input");

    // regex patterns
    const patterns = {
        name: /^[a-zA-z\d]{5}/, //name with digit
        mobile: /^\d{10}$/,
        email: /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    };

    // validation function
    let validate = (field, regex) => {
        if (field.value !== null) {
            const flag = regex.test(field.value);
            if (flag) {
                field.className = "valid";
            } else {
                field.className = "invalid";
            }
        }
    }

    // set all events
    let setEvents = () => {
        inputs.forEach((input, index) => {
            const patternType = input.attributes.name.value;
            EventUtil.addHandler(input, "keyup", (event) => {
                validate(event.target, patterns[patternType]);
            });
        });
    };
    setEvents();
};

EventUtil.addHandler(window, "load", init);