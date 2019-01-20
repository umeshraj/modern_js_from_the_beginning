class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }

  // Show all posts
  showPosts(posts) {
    let output = "";
    posts.forEach(post => {
      output += `
      <div class="card mb-3">
      <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
        <a href="#" class="edit card-link" data-id="${post.id}">
          <i class="fa fa-pencil"></i>
        </a>

        <a href="#" class="delete card-link" data-id="${post.id}">
        <i class="fa fa-remove"></i>
      </a>
      </div>
    </div>
        `;
    });
    this.post.innerHTML = output;
  }

  // show alert message
  showAlert(message, className) {
    this.clearAlert();

    // create div
    const div = document.createElement("div");
    // add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // insert to DOM
    const container = document.querySelector(".postContainer");
    // Get posts
    const posts = document.querySelector("#posts");
    // insert alert
    container.insertBefore(div, posts);

    // time out
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear all fields
  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  // fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    // change state
    this.changeFormState("edit");
  }

  // clear ID hidden state
  clearIdInput() {
    this.idInput.value = "";
  }

  // change the form state
  changeFormState(type) {
    if (type == "edit") {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = "post-submit btn btn-warning btn-block";

      // create a cancel button
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light btn-block";
      button.appendChild(document.createTextNode("Cancel Edit"));

      // get parent to insert
      const cardForm = document.querySelector(".card-form");
      // Get element to insert before
      const formEnd = document.querySelector(".form-end");
      console.log(button);
      console.log(cardForm);
      console.log(formEnd);
      // insert cancel button
      cardForm.insertBefore(button, formEnd);
    } else {
      // back to add
      this.postSubmit.textContent = "Post It";
      this.postSubmit.className = "post-submit btn btn-primary btn-block";
      // remove cancel button if it's there
      if (document.querySelector(".post-cance")) {
        document.querySelector(".post-cancel").remove();
      }
      // clear ID from hidden field
      this.clearIdInput();
      // Clear text fields
      this.clearFields();
    }
  }
}

export const ui = new UI();
