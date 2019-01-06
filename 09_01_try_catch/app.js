const user = { email: "asfa@dsafdas.com" };
try {
  //   // produce a Reference Errror
  //   myFunction();
  //   // produce a type error
  //   null.myFunction();
  // // produce a syntax error
  //   eval("Hello world");
  //   //   URI error
  //   decodeURIComponent("%");

  //   Our own errors
  if (!user.name) {
    // throw "User has no name";

    // format throw
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  // full error
  console.log(e);

  //   // name only
  //   console.log(e.message);

  //   //   type of error
  //   console.log(e instanceof ReferenceError);
  //   console.log(e instanceof TypeError);
} finally {
  console.log("Runs no matter what happens");
}

console.log("Program continues...");
