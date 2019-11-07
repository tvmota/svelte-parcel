<script>
  import { getPkmn } from '../services/PokeService';
  import Card from '../components/common/Card.svelte';
  import Loader from '../components/common/Loader.svelte';
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
<div class="h-full w-full flex flex-wrap px-2 sm:px-6 md:px-8 lg:px-12 xl:px-20">
  <div class="h-12 w-full flex flex-wrap mb-8 px-3">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Username">
  </div>
  <div class="h-full flex flex-wrap px-2 w-full">
    {#await promise} 
      <Loader />
    {:then pkmns}
      {#each pkmns as pkmn}
        <div class="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 px-2">
          <Card pkmnObj={pkmn}/>
        </div>
      {/each}
    {/await}
  </div>
</div>
