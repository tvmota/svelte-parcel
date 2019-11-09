<script>
  import { getPkmn, getSpecies } from '../services/PokeService';
  import Loader from '../components/common/Loader.svelte';
  import Badge from '../components/common/Badge.svelte';

  export let router = {};
  let pkmn;
  let pkmnSpecie;
  let description;
  let promise = pkmnInfo();

  async function pkmnInfo() {
    const resp = await Promise.all([getPkmn(router.params.id), getSpecies(router.params.id)]);
    pkmn = resp[0];
    pkmnSpecie = resp[1];
    description = getDescription(pkmnSpecie);
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
  {:then val}
    <div class="max-w-4xl mx-auto flex flex-col border py-8">
      <div class="flex justify-center">
        <img
          alt={pkmn.name}
          class="w-64 h-64"
          src={pkmn.sprites.front_default}>
        <img
          alt={pkmn.name}
          class="w-64 h-64"
          src={pkmn.sprites.back_default}>
      </div>
      <div class="flex mx-10 bg-red-300 py-2 justify-around mb-6">
        <h1 class="capitalize text-2xl font-medium">
          {`#${pkmn.id} ${pkmn.name}`}
        </h1>
        <div>
          {#each pkmn.types as pkmnType}
            <span class="mr-2">
              <Badge text={pkmnType.type.name} badgeColor={pkmnType.type.name}/>
            </span>
          {/each}
        </div>
      </div>
      <hr class="my-3 hr--text relative text-center" data-content="Info">
      <div class="flex mx-10">
        <blockquote class="border-l-4 border-red-300 px-4">
          <cite class="font-bold">Description</cite>
          <p class="mt-2 italic">{description}</p>
        </blockquote>
      </div>
    </div>
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