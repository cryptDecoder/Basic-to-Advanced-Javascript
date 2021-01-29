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

console.log(prithvi);

var sam = new User('sam', 2)
console.log(sam);