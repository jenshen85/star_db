export default class SWapiService {
  _apiBase = 'https://swapi.co/api'

  async getResources (url) {
    const res = await fetch(`${this._base}${url}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${this._base}${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResources('/people/');
    return res.results;
  }

  getPeople(id) {
    return this.getResources(`/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getResources('/planets/');
    return res.results;
  }

  getPlanet(id) {
    return this.getResources(`/planets/${id}`)
  }

  async getAllStarships() {
    const res = await this.getResources('/starships/');
    return res.results;
  }

  getStarship(id) {
    return this.getResources(`/starships/${id}`)
  }
}