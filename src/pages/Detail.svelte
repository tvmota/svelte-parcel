<script>
  import { getPkmn, getSpecies, getEvolutions } from '../services/PokeService';
  import EvolutionList from '../components/custom/EvolutionList';
  import Loader from '../components/common/Loader.svelte';
  import Badge from '../components/common/Badge.svelte';
  import Error from '../components/common/Error.svelte';

  export let params = {}
  const patt = new RegExp(/\d{1,}(?!\d|.*\d{1,})/g);
  let promise = pkmnInfo();
  let evolutionList;
  let idEvolution;
  let description;
  

  async function pkmnInfo() {
    const resp = await Promise.all([getPkmn(params.id), getSpecies(params.id)]);
    idEvolution = patt.exec(resp[1].evolution_chain.url);
    description = getDescription(resp[1]);
    evolutionList = await getEvolutions(idEvolution[0]);

    return Promise.resolve(resp);
  };

  function getDescription(specie) {
    return specie.flavor_text_entries
      .find(entrie => entrie.language.name === 'en')
      .flavor_text;
  }
</script>
<div>
  {#await promise}
    <Loader />
  {:then resp}
    <div class="max-w-2xl mx-auto flex flex-col border py-4 shadow-lg">
      <div class="flex justify-center">
        <img
          alt={resp[0].name}
          class="w-32 xl:w-64 lg:w-64 md:w-64 sm:w-56 h-32 sm:h-56 md:h-64 lg:h-64 xl:h-64"
          src={resp[0].sprites.front_default}>
        <img
          alt={resp[0].name}
          class="w-32 xl:w-64 lg:w-64 md:w-64 sm:w-56 h-32 sm:h-56 md:h-64 lg:h-64 xl:h-64"
          src={resp[0].sprites.back_default}>
      </div>
      <div class="flex bg-red-300 py-2 mx-4 justify-around mb-6">
        <h1 class="capitalize text-2xl font-medium">
          {`#${resp[0].id} ${resp[0].name}`}
        </h1>
        <div>
          {#each resp[0].types as pkmnType}
            <span class="mr-2">
              <Badge text={pkmnType.type.name} badgeColor={pkmnType.type.name}/>
            </span>
          {/each}
        </div>
      </div>
      <hr class="my-3 hr--text relative text-center" data-content="Info">
      <div class="flex px-4 mb-6">
        <blockquote class="border-l-4 border-red-300 px-4">
          <cite class="font-bold">Description</cite>
          <p class="mt-2 italic">{description}</p>
        </blockquote>
      </div>
      <div class="flex px-4">
        <EvolutionList {evolutionList} pkmnId={resp[0].id}/>
      </div>
    </div>
  {:catch error}
	  <Error msg="Erro ao obter os dados"/>
  {/await}
</div>

<style>
  .hr--text::after {
    content: attr(data-content);
    position: absolute;
    display: inline-block;
    transform: translateY(-.76rem);
  }
</style>