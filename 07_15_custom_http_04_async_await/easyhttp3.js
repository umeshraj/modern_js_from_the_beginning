/**
 * EasyHTTP library
 * Libary for making http requests
 *
 * @version 3.0.0
 * @author Umesh Rajashekar
 * @license MIT
 *
 */

class EasyHTTP {
  //  make HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //  make HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  //  make HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //  make HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => resolve("Resource deleted.."))
        .catch(err => reject(err));
    });
  }
}
