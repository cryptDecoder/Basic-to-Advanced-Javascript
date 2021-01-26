/**
 * There is two types of context in javascript 
 * 1 Execution context
 * 2. Global Context
 */

 /**
  *  Execution Context
  *  variable Object 
  *  Scope chain
  *  this 
  */

  // Function declaration are scanned and made available
  // Variable declaration are scanned and made undefined


  function tipper(a){
      var bill = parseInt(a);
      console.log(bill + 5 );
  }

  tipper("7")

//bigTipper(100)
 var bigTipper =  function bigTpper(a){
    var bill = parseInt(a);
    console.log(bill + 50 );
  }


  // Global context -> if you are accessing the variable before the declaration it will give the output as undefined, because it scan the whole code and it know,
  // the variable have declared.

  console.log(name);
  var name = "Jon";