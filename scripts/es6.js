let numbers = [10, 20, 30, 40];

let mapType1 = numbers.map(currentVal => 5 + currentVal);
console.log(mapType1);

let mapType2 = numbers.map((currentVal, index) => {
    return `${index}:${currentVal}`;
});
console.log(mapType2);