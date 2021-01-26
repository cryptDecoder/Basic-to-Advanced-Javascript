/**
 * Objects in javascript -> 
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