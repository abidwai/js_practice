var seprator = function() {
    console.log("*****************************");
}

// map()
var a = [1, 2, 3, 4];
var result = a.map(function(value) {
    return value * 2;
});

console.log("result by map: " + result);
seprator();


// filter()
var result2 = a.filter(function(value) {
    return value > 2;
});

console.log("result by filter: " + result2);
seprator();

// every()
var result3 = a.every(function(value) {
    return value > 2;
});

console.log("result by every: " + result3);
seprator();

// some()
var result4 = a.some(function(value) {
    return value > 2;
});

console.log("result by some: " + result4);
seprator();

//forEach()
a.forEach(function(value, index) {
    console.log("index" + "[" + index + "] : " + value);
});
seprator();

var browser = ["safari", "chrome", "firefox", "opera"];