class Weather {
  constructor(city, countryCode) {
    this.apiKey = null;
    // update api key from local file
    this.getApiKey();
    this.city = city;
    this.countryCode = countryCode;
  }

  //   update api key from local file
  async getApiKey() {
    const res = await fetch("apikey_openweather.json");
    const apiKey = await res.json();
    this.apiKey = apiKey.apiKey;
  }

  //   fetch weather from api
  async getWeather() {
    const url = `
        http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
      this.countryCode
    }&APPID=${this.apiKey}
      `;
    console.log(url);
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  //   change location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
