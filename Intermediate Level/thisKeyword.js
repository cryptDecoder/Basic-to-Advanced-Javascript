/**
 * this keyword
 */

 console.log(this);

 var game = "cricket";

 function sayGame(){
     var gameName = "FootBall";
     console.log(this);
 }

 sayGame()