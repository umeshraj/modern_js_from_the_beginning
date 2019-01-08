// Form blur event listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

// validate name
function validateName() {
  const name = document.getElementById("name");
  // Start and end with charactes 2-10 in length
  const re = /^[a-zA-Z]{2,10}$/;
  //   Evaluate
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

// validate zip
function validateZip() {
  const zip = document.getElementById("zip");
  // 5 digits and optional - and 4 more
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  //   Evaluate
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

// validate email
function validateEmail() {
  const email = document.getElementById("email");
  // abc23@sf12.com
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,5}$/;
  //   Evaluate
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

// validate phone
function validatePhone() {
  const phone = document.getElementById("phone");
  // 5 digits and optional - and 4 more
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  //   Evaluate
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
