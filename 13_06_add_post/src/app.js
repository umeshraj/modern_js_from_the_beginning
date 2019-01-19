import { http } from "./http";
import { ui } from "./ui";

// get posts on dom load
document.addEventListener("DOMContentLoaded", getPosts);

// listen to  add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// get posts

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// submit posts
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  const data = {
    title: title,
    body: body
  };

  //   create post
  http
    .post("http://localhost:3000/posts", data)
    .then(data => {
      getPosts();
    })
    .catch(err => console.log(err));
}
