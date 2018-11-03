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
    //arrayExamples();

////////////////////// 
// spread operator examples
let spreadOpEx = () => {
    let addFoureAges = function(a, b, c, d) {
        return a + b + c + d;
    }
    let sum = addFoureAges(10, 20, 30, 40);
    console.log(sum);
    // ES5
    var ages = [10, 20, 30, 40];
    /* if you want to pass array elements as an arguments then used apply method else use call method */
    var sum5 = addFoureAges.apply(null, ages);
    console.log('ES5 way ' + sum5);

    //ES6
    let sum6 = addFoureAges(...ages);
    console.log(`ES6 way ${sum6}`);
}
spreadOpEx();

////////////////////// 
// rest operator examples
let restOpEx = () => {

    let person = (limit, ...years) => {
        //years.forEach(ele => console.log(2018 - ele >= limit));
    }
    let anup = person(21, 1990, 2016);
}

////////////////////// 
// default parameter

let defultParaEx = () => {

}

//////////////////////
// class and inheritance
let oojsEx = () => {
        class Element {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }

        class PersonJohn extends Element {
            constructor(name, age, desg) {
                super(name, age);
                this.desg = desg;
            }
        }
        let pJohn = new PersonJohn("john", 29, "SE");
        console.log(pJohn.name);
    }
    // oojsEx();