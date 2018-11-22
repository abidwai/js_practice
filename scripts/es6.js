//////////////////////
// map examples
let mapExamples = () => {
        let numbers = [10, 20, 30, 40];

        let mapType1 = numbers.map(currentVal => 5 + currentVal);
        console.log(mapType1);

        let mapType2 = numbers.map((currentVal, index) => {
            return `${index}:${currentVal}`;
        });
        console.log(mapType2);
    }
    //mapExamples();

//////////////////////
// array examples
// ES6
let arrayExamples = () => {
        let numbers = [10, 20, 30, 40];
        console.log(numbers.findIndex(currentVal => currentVal > 30));
        console.log(numbers.find(currentVal => currentVal > 30));
    }
    // arrayExamples();

//////////////////////
// spread operator examples
let spreadOpEx = () => {
        let addFoureAges = function(a, b, c, d) {
            return a + b + c + d;
        }
        let sum = addFoureAges(10, 20, 30, 40);
        console.log(sum);
        // ES5
        var ages = [10, 20, 30, 40, 50];
        /* if you want to pass an array of elements as an arguments, then used apply method else use call method */
        var sum5 = addFoureAges.apply(null, ages);
        console.log('ES5 way ' + sum5);

        //ES6
        let sum6 = addFoureAges(...ages);
        console.log(`ES6 way ${sum6}`);
    }
    // spreadOpEx();

//////////////////////
// rest operator examples
let restOpEx = () => {

        let person = (limit, ...years) => {
            years.forEach(ele => console.log(2018 - ele >= limit));
        }
        let anup = person(21, 1990, 2016);
    }
    // restOpEx();

//////////////////////
// default parameter

let defultParaEx = () => {
        let car = (name, price, color, milage = 18) => {
            console.log(`${name} ${price} ${color} ${milage}`);
        }
        car("Audi", 9000, 'red', 20);
    }
    //defultParaEx();

//////////////////////
// class and inheritance
let oojsEx = () => {
    class Elements {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class PersonJohn extends Elements {
        constructor(name, age, desg) {
            super(name, age);
            this.desg = desg;
        }
    }
    let objJohn = new PersonJohn("john", 29, "SE");
    console.log(`${objJohn.name} age is ${objJohn.age} and he is ${objJohn.desg}`);
}
oojsEx();

//////////////////////
// distructor
let distEx = () => {
        // array ex
        let numbers = [1, 2, 3];
        //let [a, b] = numbers; // 3 omit
        //let [a, , c] = numbers; // 2 omit
        // let [a, b = 40] = numberts; // with default parameter
        let [a, ...num] = numbers; // 1 omit
        console.log(`${num}`);

        // for object use {} brackets insted of [] brackets, and parameter should be same as object property
    }
    // distEx();