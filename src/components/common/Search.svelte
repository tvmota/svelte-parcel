<script>
  import {link} from 'svelte-spa-router'

  export let searchApi;
  let resultsVisible = 'invisible';
  let loaderVisible = 'invisible';
  let search = '';
  let results = [];

  function submit(evt) {
    evt.preventDefault();
    
    if (search.length > 0 && search !== 0) {
      loaderVisible = 'visible';

      searchApi(search).then(resp => {
        results.push(resp);
        loaderVisible = `invisible`;
        resultsVisible = 'visible';
      }).catch(err => {
        loaderVisible = `invisible`;
        console.log('erro ', err);
      });
    }
  }

  function hideResultBlur(evt) {
    if (results.length > 0 && search.length < 1) {
      resultsVisible = 'invisible';
      results = [];
    }
  }

  function clear(evt) {
    if (search.length < 1) {
      resultsVisible = 'invisible';
      results = [];
    }
  }
</script>

<form
  class="w-full h-full relative inline-block"
  novalidate
  on:submit={submit}>
    <div class="w-full h-full">
      <input
        bind:value={search}
        on:blur={hideResultBlur}
        on:keyup={clear}
        class="h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-xs sm:text-sm md:text-lg lg:text-lg xl:text-lg focus:border-red-500"
        id="username"
        placeholder="Inserir num ou nome completo do pokemon e pressionar enter"
        type="text">
      <i class={`${loaderVisible} loader`}></i>
    </div>
    <div class={`${resultsVisible} absolute border z-10 right-0 left-0 bg-white flex flex-col shadow-lg mt-1`}> 
      {#if results.length > 0}
        {#each results as result}
          <a class="flex hover:bg-red-200" href={`/detail/${result.id}`} use:link>
            <img
              alt={result.name}
              class="w-24 h-24"
              src={result.sprites.front_default}>
            <h2 class="capitalize flex items-center font-semibold text-lg">
              {`#${result.id} ${result.name}`}
            </h2>
          </a>
        {/each}
      {:else}
        <h4 class="font-semibold text-lg text-center">Sem resultados</h4>
      {/if}
    </div>
</form>

<style>
  @keyframes around {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .loader {
    position: absolute;
    height: 20px;
    width: 20px;
    display: inline-block;
    animation: around 5.4s infinite;
    top: calc(50% - 10px);
    right: 16px;
  }

  .loader::after, .loader::before {
    content: "";
    background: white;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-width: 3px;
    border-color: #e53e3e #e53e3e transparent transparent;
    border-style: solid;
    border-radius: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    animation: around 0.7s ease-in-out infinite;
  }

  .loader::after {
    animation: around 0.7s ease-in-out 0.1s infinite;
    background: transparent;
  }
</style>
