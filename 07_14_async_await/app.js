async function myFunc() {
  // return "Hello";

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });

  const res = await promise; // wait until promise is resolved
  return res;
}

// console.log(myFunc());
myFunc().then(res => console.log(res));
