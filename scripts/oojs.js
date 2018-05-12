/* private member in JS */

function Person(name, age) {

    //public fields
    this.name = name;
    this.age = age;

    /**
     * store "this" reference, because inner function don't have an access of "this" variable directly
     */
    var that = this;

    //private fields
    var fullDetails;

    //private method
    var privateMethod = function() {
        fullDetails = that.name + "," + that.age;
        return fullDetails;
    }

    //priviledge method have an access of private method
    this.priviledgeMethod = function() {
        return privateMethod();
    }

    /**
    public method don't have an access of private method, 
    and public method is shared by amoung all the instances (means only one copy in memory)
    */
    Person.prototype.publicMethod = function() {
        return this.priviledgeMethod();
    }
}

var p = new Person("anup", 29);
var result = p.publicMethod();
console.log(result);


/* property in js */

var Department = function(name, id) {

    var _name = name;
    var _id = id;

    //only get access
    Object.defineProperty(this, "name", {
        set: function(value) {
            _name = value;
        },
        get: function() {
            return _name;
        }
    });

    //both accesses set and get
    Object.defineProperty(this, "id", {
        get: function() {
            return _id;
        }
    });
}


var dept = new Department("IT", "IT01");
console.log(dept.name + " " + dept.id);


/* static member in js */

var Circle = function(radius) {

    // static copy, shared by amoung all the instances
    Circle.PI = 3.14;

    this.r = radius;

    this.caluclateArea = function() {
        return Circle.PI * (this.r * this.r);
    }
}

var c = new Circle(5);
console.log("Circle area is: " + c.caluclateArea());