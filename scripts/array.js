(function() {

    var seprator = function() {
        console.log("*****************************");
    }

    // map()
    var a = [1, 2, 3, 4];
    console.log("orignal array :" + a);
    seprator();

    var result = a.map(function(value) {
        return value * 2;
    });

    console.log("result by map: " + result);
    seprator();


    // filter()
    var result = a.filter(function(value) {
        return value > 2;
    });

    console.log("result by filter: " + result);
    seprator();

    // every()
    var result = a.every(function(value) {
        return value > 2;
    });

    console.log("result by every: " + result);
    seprator();

    // some()
    var result = a.some(function(value) {
        return value > 2;
    });

    console.log("result by some: " + result);
    seprator();

    // forEach()
    a.forEach(function(value, index) {
        console.log("index" + "[" + index + "] : " + value);
    });
})();