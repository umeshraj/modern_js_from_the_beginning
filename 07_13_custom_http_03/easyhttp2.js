/**
 * EasyHTTP library
 * Libary for making http requests
 *
 * @version 2.0.0
 * @author Umesh Rajashekar
 * @license MIT
 *
 */

class EasyHTTP {
  //  make and HTTP GET request
  get(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
