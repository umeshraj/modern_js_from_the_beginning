// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI class
const ui = new UI();

// Get weather on DOM loaded
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state);
  // get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}
