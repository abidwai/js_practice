var init = () => {

    var saveHandler = (event) => {
        var event = EventUtil.getEvent(event);
        console.log(event.eventPhase);
    };

    var testHnadler = (event) => {
        var event = EventUtil.getEvent(event);
        console.log(event.eventPhase);
    };

    var inputHandler = (event) => {
        var event = EventUtil.getEvent(event);
        var charCode = EventUtil.getCharCode(event);
        console.log(charCode);
    };

    /* event deligation */
    var listHandler = (event) => {
        var event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        switch (target.id) {
            case "l1":
                console.log("l1");
                break;
            case "l2":
                console.log("l2");
                break;
            case "l3":
                console.log("l3");
                break;
            default:
                break;
        }
    };

    var setEvents = () => {
        var btnSave = document.getElementById("btn-save");
        EventUtil.addHandler(btnSave, "click", saveHandler);

        var body = document.getElementsByTagName('body')[0];
        // EventUtil.addHandler(body, "click", testHnadler);

        var input = document.getElementById("input");
        EventUtil.addHandler(input, "keypress", inputHandler);

        EventUtil.addHandler(input, "focus", (event) => {
            event = EventUtil.getEvent(event);
            var target = EventUtil.getTarget(event);
            target.select();
        });

        EventUtil.addHandler(input, "select", () => {
            var res = input.value.substring(input.selectionStart, input.selectionEnd);
            console.log("res", res);
        });

        var list = document.getElementsByClassName('list')[0];
        EventUtil.addHandler(list, "click", listHandler);
        // EventUtil.removeHandler(list, "click", listHandler);
    };
    setEvents();
};

EventUtil.addHandler(window, "load", init);