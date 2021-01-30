/** 
 * Spread operator in javascript
 */

var maxValue = Math.max(2, 3, 5, 6, 7, 77)
console.log(maxValue);


function sumValues(...args) {
    console.log(args);
    let sum = 0;
    for (let arg of args) {
        sum = sum + arg
    }
    return sum

}

console.log(sumValues(22, 33, 33));