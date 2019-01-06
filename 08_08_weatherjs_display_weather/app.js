// Init weather object
const weather = new Weather("Boston", "US");
// Init UI class
const ui = new UI();

// Get weather on DOM loaded
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    // .then(results => console.log(results))
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}
