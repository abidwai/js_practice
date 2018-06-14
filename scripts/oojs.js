(function() {
    /**
     * Object literal pattern
     * Singleton object
     */
    var Emp = {
        "fname": "John",
        "age": "28"
    }

    // before change
    document.write("<br/>Employee name before change: " + Emp.fname); // John

    // after changed
    var e2 = Emp;
    e2.fname = "Mark";
    document.write("<br/>Employee name after changed: " + Emp.fname); // Mark
    document.write("<br/>Employee name after changed: " + e2.fname); // Mark

    document.write("<br/>****************************");

    /* Constructor pattern */
    function Employee(fname, age) {
        this.fname = fname;
        this.age = age;
    }

    var e = new Employee("Sam", 28);
    var e2 = new Employee("Doe");
    document.write("<br/>Employee name of e: " + e.fname); // Sam
    document.write("<br/>Employee name of e2: " + e2.fname); // Doe

    document.write("<br/>****************************");


    /* Namespace, used to reduce global pollution */
    var Company = Company || {};
    Company.TeamA = Company.TeamA || {};

    Company.TeamA.customer = function(name, age) {
        this.name = name;
        this.age = age;
    }

    var getFullDeatails = function(obj) {
        return obj.name + "," + obj.age;
    }

    var team1 = new Company.TeamA.customer("John", 30);
    document.write("<br/> customer details: " + getFullDeatails(team1)); // John,30

    var team2 = new Company.TeamA.customer("Mac", 30);
    document.write("<br/> customer details: " + getFullDeatails(team2)); // Mac,30

    var result = team1.getFullDeatails === team2.getFullDeatails
    document.write("<br/>method equals ? :" + result); // true


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

        //only get and set access
        Object.defineProperty(this, "name", {
            set: function(value) {
                _name = value;
            },
            get: function() {
                return _name;
            }
        });

        //only get
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
})();