<script>
  import Badge from './Badge.svelte';
  export let pkmnObj;
</script>

<div class="w-full rounded overflow-hidden shadow-xl flex flex-col flex-wrap items-center cursor-pointer border border-red-500">
  <div>
    <img
      class="w-64 h-64"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
      alt="Sunset in the mountains">
  </div>
  <div class="w-full pb-4 bg-red-300 border border-red-300">
    <div class="px-4 py-2">
      <div class="font-bold text-xl text-gray-900">#00 Kadabra</div>
    </div>
    <div class="px-4 py-2">
      <span class="mr-2">
        <Badge text="fire" badgeColor="fire"/>
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        #winter
      </span>
    </div>
  </div>
</div>