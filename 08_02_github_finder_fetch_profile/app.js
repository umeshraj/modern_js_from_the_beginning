// Init GitHub
const github = new GitHub();

// Search input
const searchUser = document.getElementById("searchUser");
// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;
  if (userText != "") {
    // console.log(userText);
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //   Show alert that user is not found
      } else {
        //   Show profile
        console.log(data.profile);
      }
    });
  } else {
    //   Clear the profile if no input
  }
});
