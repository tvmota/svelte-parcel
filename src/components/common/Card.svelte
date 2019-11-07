<script>
  import Badge from './Badge.svelte';
  export let pkmnObj;
</script>

<div class="w-full rounded overflow-hidden shadow-xl flex flex-col flex-wrap items-center cursor-pointer border border-red-500">
  <div>
    <img
      alt={pkmnObj.name}
      class="w-64 h-64"
      src={pkmnObj.sprites.front_default}>
  </div>
  <div class="w-full pb-4 bg-red-300 border border-red-300">
    <div class="px-4 py-2">
      <div class="font-bold text-xl text-gray-900 capitalize">
        {`#${pkmnObj.id} ${pkmnObj.name}`}
      </div>
    </div>
    <div class="px-4 py-2">
      {#each pkmnObj.types as pkmnType}
        <span class="mr-2">
          <Badge text={pkmnType.type.name} badgeColor={pkmnType.type.name}/>
        </span>
      {/each}
    </div>
  </div>
</div>