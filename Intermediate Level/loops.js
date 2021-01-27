/**
 *  Loops in javascript
 *  for loop
 */

// basic for loop

for (let i = 0; i < 10; i++) {
    console.log("Basic for loop");
}

const names = ['Ted', 'Tom', 'Hardy', 'John'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while loop

let i = 0;
while (i < 10) {
    console.log("Checking console logs")
    i++;
}

let j = 0;
do {
    console.log("Do while loop");
    j++;
} while (i < 10);


/**
 * for each loop
 */

var k = 0;

names.forEach((s) => {
    console.log(s);
})