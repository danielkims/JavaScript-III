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
greeting(Danny);

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding