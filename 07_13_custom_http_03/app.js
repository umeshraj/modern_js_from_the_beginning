const http = new EasyHTTP();

// // Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// user data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
};

// // Posting data
// // create post
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update post with PUT
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
