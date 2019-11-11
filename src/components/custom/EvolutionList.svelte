<script>
  import { getPkmn } from '../../services/PokeService';
  import Icon from '../common/Icon.svelte';

  export let evolutionList;
  export let pkmnId;
  let promise = getEvolutionInfo();

  async function getEvolutionInfo() {
    const resp = await Promise.all(evolutionList.map(pkmn => getPkmn(pkmn.name)));
    return Promise.resolve(resp);
  }
</script>
<div class=" w-full">
  {#await promise}
    <div class="bouncing-loader">
      <div>
        <Icon iconName="bullbasaur" size="md"/>
      </div>
      <div>
        <Icon iconName="charmander" size="md"/>
      </div>
      <div>
        <Icon iconName="squirtle" size="md"/>
      </div>
    </div>
  {:then resp}
    <div class="flex justify-around">
      {#each resp as item}
        <div class="flex flex-col text-center px-1">
          <img
            alt={item.name}
            class="w-24 md:w-32 lg:w-32 xl:w-32 h-24 md:h-32 lg:h-32 xl:h-32"
            src={item.sprites.front_default}>
          <h4 class="{`capitalize p-1 font-medium bg-red-300 rounded-sm ${pkmnId === item.id ? 'bg-red-600 text-white': ''}`}">
            {item.name}
          </h4>
        </div>
      {/each}
    </div>
  {/await}
</div>

<style>
  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -1rem, 0);
    }
  }

  .bouncing-loader {
    display: flex;
    justify-content: center;
  }

  .bouncing-loader > div {
    margin: 3rem 0.4rem;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>