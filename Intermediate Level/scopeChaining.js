/**
 *  Scope Chaining
 */

var name = "Richa";
console.log("Line number 6", name);

function sayName() {
    var name = "warner";
    console.log("Line number 9", name);
}
sayName()

/**
 * 
 * Scope Chaining:
 * if a function want the value of variable name and it is not defined inside the function it will be check
 * into the globally and access the value,
 * in short the javascript scope chaining check the value firstly locally if not available it will scan to 
 * globally.
 */