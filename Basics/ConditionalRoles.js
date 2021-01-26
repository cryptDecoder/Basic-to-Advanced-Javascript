/**
 *  CONDITIONAL ROLES
 *      create an application  with following roles.
 *      1. admin -> get full access
 *      2. subadmin -> get access to create and delete the course.
 *      3. testprep -> get access to create/delete tests
 *      4. user -> get access the consume content
 */


var user = 'admin'; // change the user value to check user role and permissions

switch (user) {
    case "admin":
        console.log("you get the full access.");
        break;
    case "subadmin":
        console.log("you get the access create and delete the courses.");
        break;
    case "testprep":
        console.log("You get access to create and delete test");
        break;
    case "user":
        console.log("You can consume the content");
        break;
    default:
        console.log("Not matching user");
        break;
}