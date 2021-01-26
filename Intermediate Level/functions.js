/**
 *  Functions ->
 *  function is code block where we can write set of conditions or our logic.
 *  
 */

 // declaration of function
function sayHello(){
    console.log("Hello, This is a first javascript function.");
}

// calling the function
sayHello()

// function with parameter

function sayHelloName(name){
    console.log(`Hello, ${name}. how are you?`)
}

//calling the function
sayHelloName("Pruthviraj")


// function with return

function namstey(){
    return "namstey, how are you all?"
}

// calling function and store result into variables
var greet = namstey();
console.log(greet);