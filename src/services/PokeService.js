const baseUrl = 'https://pokeapi.co/api/v2';
const headers = {
  'Content-type': 'application/json',
}

export const getPkmn = (param) =>
  fetch(`${baseUrl}/pokemon/${param}`, { headers })
    .then(resp => resp.json());

export const getEvolutions = (param) =>
  fetch(`${baseUrl}/evolution-chain/${param}`, { headers })
    .then(resp => resp.json())
    .then(resp => {
      const evolutionList = [];
      if (resp.chain.evolves_to.length > 0) {
        evolutionList.push(resp.chain.species);
        evolutionList.push(resp.chain.evolves_to[0].species);
        resp.chain.evolves_to[0].evolves_to.map(item => evolutionList.push(
          Object.assign(item.species, item.evolution_details[0])
        ));
      }

      return evolutionList;
    });

export const getSpecies = (param) =>
  fetch(`${baseUrl}/pokemon-species/${param}/`, { headers })
    .then(resp => resp.json()); 
