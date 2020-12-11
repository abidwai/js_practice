// Morning promise
let morning = function () {
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve(`morning resolve,`);
        } else {
            reject(`morning reject,`);
        }
    });
}

// afternoon promise
let afternoon = function (message) {
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve(`${message} afternoon resolve,`);
        } else {
            reject(`${message} afternoon reject,`);
        }
    });
}

// night promise
let night = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(`${message} night resolve,`);
    });
}



morning().then(function (result) {
    // resolve area
    return afternoon(result);
}, function (result) {
    // reject area
    return afternoon(result);
}).then(function (result) {
    // resolve area
    return night(result);
}, function (result) {
    // reject area
    return night(result);
}).then(function (result) {
    console.log(`${result} finished`);
});
