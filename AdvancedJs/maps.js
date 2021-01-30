/**
 * Maps in javascript
 */

var myMap = new Map()

myMap.set(0, "Cricket")
myMap.set(1, "football")


console.log(myMap);

for (let key of myMap.keys()) {
    console.log(`key is :${key}`);
}

for (const value of myMap) {
    console.log(`value :${value}`);

}

for (const [key, value] of myMap) {
    console.log(key, value);
}

myMap.forEach(v => {
    console.log(v);
});