const baseUrl = 'https://pokeapi.co/api/v2';
const headers = {
  'Content-type': 'application/json',
}

export const getPkmn = (param) =>
  fetch(`${baseUrl}/pokemon/${param}`, { headers })
    .then(resp => resp.json());

export const getTypes = () =>
  fetch(`${this.baseUrl}/type/`, { headers })
    .then(resp => resp.json());

export const getEvolutions = (param) =>
  fetch(`${this.baseUrl}/evolution-chain/${param}`, { headers })
    .then(resp => resp.json());

export const getSpecies = (param) =>
  fetch(`${this.baseUrl}/pokemon-species/${param}/`, { headers })
    .then(resp => resp.json());
