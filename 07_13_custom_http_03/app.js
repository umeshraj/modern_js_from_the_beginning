const http = new EasyHTTP();

// // Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Posting data

// user data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
};
// create post
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
