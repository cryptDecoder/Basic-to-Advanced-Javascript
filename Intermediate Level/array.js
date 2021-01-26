/**
 * Array:-> 
 *  Array is a just collection of variable or values.
 */

//array declaration
var countries = ['India', 'USA', 'Brazil', 'Japan', 'Russia']

// array declaration
var games = new Array(
    'Cricket',
    'Football',
    'Basket Ball'
)

// display the array elements
console.log(countries);
console.log(games);

// accessing specific value from array
console.log(countries[2]);
// count the elements
console.log(games.length);

// pop the element
console.log(games.pop());

// unshift
games.unshift("Kabaddi");
console.log(games);

// shift
console.log(games.shift());

// indexof 

console.log(countries.indexOf("India"));

/**
 *  Array part 2
 */

function isEven(element) {
    if (element % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(2));

// Single line function

function isOdd(ele) {
    return ele % 2 === 1;
}
console.log(isOdd(3));

// callback and arrow function

var isEvenNumber = (number) => {
    return number % 2 === 0;
}

console.log(isEvenNumber(2));

var result = [2, 3, 4, 5, 6, 7, 8, 9].every(isEven)
console.log(result);

var output = [2, 4, 6].every((e) => {
    return e % 2 === 0;
});
console.log(output);


/**
 * Fill and filter in array
 */

var testArray = [2, 3, 4, 5, 6, 7, 8];

console.log(testArray.fill('h', 3, 6));


// filter
const myNumber = [2, 3, 4, 55, 6, 7, 8, 55, 4, 3, 2, 2, 1, 1, 77]
const result1 = myNumber.filter((num) => num > 55);
console.log(result1);

// slice and splice

var userdata = ['tom', 'jerry', 'ironMan', 'ted', 'Sam'];
console.log(userdata);
console.log(userdata.slice(2, 5));