/**
 *  Objects
 */

var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

var prithvi = new User('pritviraj', 2)
prithvi.getCourseCount()

console.log(prithvi);

var sam = new User('sam', 2)
console.log(sam);
sam.getCourseCount()

/**
 * Proto in javascript
 */


User.prototype.getFirstName = function () {
    console.log(`Your firstName is : ${this.firstName}`);
}

prithvi.getFirstName()
sam.getFirstName()