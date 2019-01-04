// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

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
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //   Show profile
        // console.log(data.profile);
        ui.showProfile(data.profile);
      }
    });
  } else {
    //   Clear the profile if no input
    ui.clearProfile();
  }
});
