async function myFunc() {
  // return "Hello";

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });

  const error = false;
  if (!error) {
    const res = await promise; // wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

// console.log(myFunc());
myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));
