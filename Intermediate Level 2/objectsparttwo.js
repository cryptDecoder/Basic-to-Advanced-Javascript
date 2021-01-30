/**
 * Objects part two
 */

var person = {
    name: "",
    getName: function () {
        console.log(`person name is :${this.name}`);
    }
}


var sam = Object.create(person, {
    name: {
        value: 'sam'
    }
})

sam.getName()