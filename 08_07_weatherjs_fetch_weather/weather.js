class Weather {
  constructor() {
    this.apiKey = null;
    // update api key from local file
    this.getApiKey();
  }

  async getApiKey() {
    const res = await fetch("apikey_openweather.json");
    const apiKey = await res.json();
    this.apiKey = apiKey.apiKey;
  }
}
