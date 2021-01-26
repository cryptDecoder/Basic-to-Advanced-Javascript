/**
 *  In this section we are going to learn the Ternary operator
 *  In given example we are going to show is user is authenticated show user sign out button otherwise show login options.
 */

var authenticated = false; // change with true for understanding the conditions.

if (authenticated) {
    console.log("Show sign out button.");
} else {
    console.log("Show login options.");
}

authenticated ? console.log("Sign out Button") : console.log("Login button");