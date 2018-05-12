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

Company.TeamA.customer = function(name, contact) {
    this.name = name;
    this.contact = contact;

    this.getFullDeatails = function() {
        return this.name + "," + this.contact;
    }

    return this;
}


var team1 = new Company.TeamA.customer("John", 30);
document.write("<br/> customer details: " + team1.getFullDeatails()); // John,30