/** pick the data */

const user = ['sachin', 2, 'admin']
var role = user[2]
var name = user[0]
console.log(role);


var [name, courseCount, role] = user;

const myuser = {
    name: 'prithvi',
    courseCount: 3,
    role: 'admin'
}

console.log(myuser.courseCount);


const {
    name,
    courseCount,
    role
} = myuser;

console.log(courseCount);