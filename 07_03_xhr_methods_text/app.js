document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object (xmlhttp)
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  console.log("READY STATE", xhr.readyState);

  // Optional - used for spinners or loaders
  xhr.onprogress = function() {
    console.log("READY STATE", xhr.readyState);
  };

  // After loading with new xhr.onload
  xhr.onload = function() {
    console.log("READY STATE", xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };

  // // before xhr.onload, we had to check for status
  // xhr.onreadystatechange = function() {
  //   console.log("READY STATE", xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function() {
    console.log("Request error");
  };

  xhr.send();
  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  // readState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}
