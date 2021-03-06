class GitHub {
  constructor() {
    this.client_id = null;
    this.client_secret = null;
    this.updateCredentials();
  }

  async updateCredentials() {
    const res = await fetch("github_oauth.json");
    const oauthData = await res.json();
    this.client_id = oauthData.client_id;
    this.client_secret = oauthData.client_secret;
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile: profile
    };
  }
}
