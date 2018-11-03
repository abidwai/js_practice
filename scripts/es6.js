////////////////////// 
// map examples

let numbers = [10, 20, 30, 40];

let mapType1 = numbers.map(currentVal => 5 + currentVal);
// console.log(mapType1);

let mapType2 = numbers.map((currentVal, index) => {
    return `${index}:${currentVal}`;
});
// console.log(mapType2);

////////////////////// 
// array examples

// ES6
let digit = [10, 20, 30, 40];
//console.log(digit.findIndex(currentVal => currentVal > 30));
//console.log(digit.find(currentVal => currentVal > 30));


////////////////////// 
// spread operator examples

var addFoureAges = function(a, b, c, d) {
    return a + b + c + d;
}
var sum = addFoureAges(10, 20, 30, 40);
// console.log(sum);

// ES5
var ages = [10, 20, 30, 40];
var sum5 = addFoureAges.apply(null, ages);
// console.log(sum5);

//ES6
let sum6 = addFoureAges(...ages);
// console.log(sum6);

////////////////////// 
// rest operator examples

let person = (limit, ...years) => {
    years.forEach(ele => console.log(2018 - ele >= limit));
}
let anup = person(21, 1990, 2016);