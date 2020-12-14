const obj1 = {
    fname: 'anup',
    lname: 'bidwai',
}

const fullname = function (gender, state) {
    console.log(`${this.fname} ${this.lname} ${gender} ${state}`)
}

fullname.call(obj1, "Male", "MH");

const obj2 = {
    fname: 'apurva',
    lname: 'tammewar',
}

fullname.apply(obj2, ["female", "MH"]);

const copyfn = fullname.bind(obj2, "female", "GJ");
copyfn();