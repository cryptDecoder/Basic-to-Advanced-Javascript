/**
 *  Define a function that can answer the role of a user
 * A user can be on one following roles:
 * admin
 * subadmin
 * testprep
 * user
 * other
 * 
 * Input: getUserRole(name, role)
 */

 // declare the function here
 function getUserRole(name,role){
     switch (role) {
        case "admin":
             return `${name} is admin with all access.`
             break;
        case "subadmin":
            return `${name} is subadmin with access to create and delete course`
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete test`
            break;
        case "user":
            return `${name} is a user with access to consume the content `
         default:
             return `${user} is a trial user`
             break;
     }
 }

// calling the function

var getRole = getUserRole('John',"admin")
console.log(getRole);

// declare function as a variable 

var getRoleValue = function (name,role){
    if (role == "admin") {
        return `${name} has admin access.`
    } else {
        return `${name} it may be another type of user`
    }
}

console.log(getRoleValue("mac","admin"));