class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-list");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    const icon_name = weather.weather[0].icon;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${icon_name}.png`
    );
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
  }
}
