/**
 * Objects in javascript -> 
 * 
 * declare objects in javascript 
 * var objectName = {};
 */

// declare the object
var user = {
    firsName: 'Prithvi',
    lastName: 'Sonawane',
    email: 'pruthvirajs2007@gmail.com',
    role: 'admin',
    loginCount: 23,
    facebook: true,
};

// access object

console.log(user.firsName);
console.log(user["email"]); // always wrap with double quote 

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.log(user);
console.table(user)


/***
 * objects part 2
 */

// declare the object
var user2 = {
    firsName: 'John',
    lastName: 'Stark',
    email: 'John@gmail.com',
    role: 'user',
    loginCount: 27,
    facebook: true,
    course: [],
    buyCourse: function (courseName) {
        this.course.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firsName} is enrolled in total of ${this.course.length}`
    },

};

console.log(user2.getCourseCount());
user2.buyCourse("Javascript")
user2.buyCourse("Python")
user2.buyCourse("MongoDB")
console.log(user2.getCourseCount());

console.table(user2)