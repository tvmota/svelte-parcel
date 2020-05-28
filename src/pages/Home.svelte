<script>
  import { getPkmn } from '../services/PokeService';
  import Card from '../components/common/Card.svelte';
  import Search from '../components/common/Search.svelte';
  import Loader from '../components/common/Loader.svelte';
  import Error from '../components/common/Error.svelte';

  let promise = getPkmnList();

  async function getPkmnList() {
    const pkmnhttp = [];
    const pkmnList = [];

    Array.from({ length: 9 }, () => {
      const num = Math.floor(Math.random() * 251) + 1;
      if (pkmnList.indexOf(num) < 0) {
        pkmnList.push(num);
      }
    });

    pkmnList.forEach(num =>
      pkmnhttp.push(getPkmn(num))
    );
    return Promise.all(pkmnhttp)
  }
</script>

<div class="h-full w-full flex flex-wrap">
  {#await promise} 
    <Loader />
  {:then pkmns}
    <div class="h-12 w-full flex flex-wrap mb-8 px-3">
      <Search searchApi={getPkmn}/>
    </div>
    <div class="h-full flex flex-wrap px-2 w-full">
      {#each pkmns as pkmn (pkmn.id)}
        <div class="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 px-2">
          <Card pkmnObj={pkmn}/>
        </div>
      {/each}
    </div>
  {:catch error}
    <Error msg="Erro ao obter os dados"/>
  {/await}
</div>

<style>
.loadable-container {
  width: 100%;
}
</style>