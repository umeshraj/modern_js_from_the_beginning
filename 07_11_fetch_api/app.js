document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);

// Get local text data
function getText() {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get local JSON data
function getJSON() {
  fetch("post.json")
    .then(function(res) {
      // console.log(res);
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
