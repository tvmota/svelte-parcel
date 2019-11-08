<script>
  import { getPkmn, getSpecies } from '../services/PokeService';
  import Loader from '../components/common/Loader.svelte';
  import Badge from '../components/common/Badge.svelte';

  export let router = {};
  let pkmn;
  let pkmnSpecie;
  let promise = pkmnInfo();

  async function pkmnInfo() {
    const resp = await Promise.all([getPkmn(router.params.id), getSpecies(router.params.id)]);
    pkmn = resp[0];
    pkmnSpecie = resp[1];

    return Promise.resolve(resp);
  };
</script>
<div>
  {#await promise}
    <Loader />
  {:then val}
    <div class="max-w-6xl mx-auto flex flex-col border py-8">
      <div class="flex">
        <img
          alt={pkmn.name}
          class="w-64 h-64"
          src={pkmn.sprites.front_default}>
        <img
          alt={pkmn.name}
          class="w-64 h-64"
          src={pkmn.sprites.back_default}>
      </div>
      <div class="flex mx-10 bg-red-300 py-2 justify-around">
        <h1 class="capitalize text-2xl">
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
    </div>
  {/await}
</div>