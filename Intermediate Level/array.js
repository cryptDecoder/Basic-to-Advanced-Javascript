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