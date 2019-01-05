// Init weather object
const weather = new Weather("Boston", "US");

// Get weather on DOM loaded
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}
