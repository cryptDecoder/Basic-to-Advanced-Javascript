/**
 *  What is conditional in javascript
 *     check the given values and take the action as per the request.
 *     for ex. if logged with google account send the email using gmail else send with outlook.
 * 
 *     for give following example
 *         if one of the login is false the login will failed otherwise login is success.
 */

var email = false;
var facebook = true;
var google = false;

if (email || facebook || google) {
    console.log("Login success");
} else {
    console.log("Login failed");
}