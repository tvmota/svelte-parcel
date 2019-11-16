<script>
  import { beforeUpdate } from 'svelte';
  import { fade } from 'svelte/transition'; 
  import { getPkmn } from '../../services/PokeService';
  import Icon from '../common/Icon.svelte';
  import Error from  '../common/Error.svelte';

  export let evolutionList;
  export let pkmnId;
  let stsList = false;
  let list;

  beforeUpdate(async () => {
    const resp = await Promise.all(evolutionList.map(pkmn => getPkmn(pkmn.name)));
    list = resp;
  });
</script>
<div class="w-full">
  {#if !list}
    <div
      class="bouncing-loader"
      out:fade="{{ duration: 1500 }}"
      on:outroend="{() => stsList = true}">
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
  {/if}

  {#if stsList && list.length > 0}
    <div class="flex justify-around" in:fade="{{ delay: 200 }}">
      {#each list as item}
        <div class="flex flex-col text-center px-1">
          <img
            alt={item.name}
            src={item.sprites.front_default}>
          <h4 class="{`capitalize p-1 font-medium bg-red-300 rounded-sm ${pkmnId === item.id ? 'bg-red-600 text-white': ''}`}">
            {item.name}
          </h4>
        </div>
      {/each}
    </div>
  {/if}
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