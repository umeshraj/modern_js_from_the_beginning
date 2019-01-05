// Init weather object
const weather = new Weather("Boston", "US");

weather
  .getWeather()
  .then(results => console.log(results))
  .catch(err => console.log(err));
