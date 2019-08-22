/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- the value of the object is shown in the window.
* 2. Implicit Binding- Object is shown on the left of the dot
* 3. New Binding- Object is created and returned by the constructor function
* 4. Explicit Binding- is explicitly defined using new context .call() and .apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greeting(name) {
    console.log("Hello " + name);
    console.log(this);
};
greeting("Danny");

// Principle 2

// code example for Implicit Binding
const dotObj = {
    greet: "Hi",
    sayHi: function(name) {
        console.log(`${this.greet}, is your name ${name}?`);
    }
};
dotObj.sayHi("Will");

// Principle 3

// code example for New Binding
function greets(name) {
    this.greets = "Hiya ";
    this.name = name;
    this.announce = function() {
        console.log(this.greets + this.name);
    }
};
const Eunice = new greets('Eunice');
const John = new greets("John");

Eunice.announce();
John.announce();

// Principle 4

// code example for Explicit Binding
Eunice.announce.call(John);
John.announce.apply(Eunice);