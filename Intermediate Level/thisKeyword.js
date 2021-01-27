/**
 * this keyword
 */

console.log(this);

var game = "cricket";


function sayGame() {
    var gameName = "FootBall";
    console.log(this);
}

sayGame()

/**
 *  Confusing part of this keyword
 *  for all regular function calls,  this points to window object
 */