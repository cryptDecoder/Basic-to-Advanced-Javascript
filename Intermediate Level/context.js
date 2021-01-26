/**
 * Context in javascript
 * 
 */

if (2 === '2') {
   console.log("This is true");
}

var value = "perry";

// global context work in  browser
if (value === window.value) {
   console.log("This is true again");
}