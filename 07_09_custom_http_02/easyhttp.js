function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      //   console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      //   console.log(self.http.responseText);
      callback(null, "Post deleted");
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
