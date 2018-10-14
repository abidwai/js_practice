var contactUs = ((event) => {
    var evt = EventUtil.getEvent(event);
    var form = document.getElementById("form1");

    var init = (evt) => {
        console.log('contact us');
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
        return true;
    };

    var setEvent = (evt) => {
        EventUtil.addHandler(form, "submit", (evt) => {
            console.log('submit event');
            evt.preventDefault();
            var status = validateFields();
            if (status) {
                form.submit();
            }
        });
    };

    return {
        init: init
    };

})();

EventUtil.addHandler(window, "load", contactUs.init);