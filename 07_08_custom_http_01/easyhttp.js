function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url) {
  this.http.open("GET", url, true);

  self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      console.log(self.http.responseText);
    }
  };

  this.http.send();
};

// Make an HTTP POST request

// Make an HTTP PUT request

// Make an HTTP DELETE request
