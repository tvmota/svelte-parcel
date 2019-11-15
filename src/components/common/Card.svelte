<script>
  import { Link } from 'svero';
  import Badge from './Badge.svelte';
  export let pkmnObj;
</script>

<Link
  className="w-full rounded overflow-hidden shadow-xl flex flex-col flex-wrap items-center cursor-pointer border border-red-500"
  href={`/detail/${pkmnObj.id}`}>
    <div>
      <img
        alt={pkmnObj.name}
        class="w-56 xl:w-64 lg:w-56 md:w-48 h-56 xl:h-64 lg:h-48 md:h-48"
        src={pkmnObj.sprites.front_default}>
    </div>
    <div class="w-full pb-4 bg-red-300 border border-red-300">
      <div class="px-4 py-2">
        <div class="font-bold text-xl text-gray-900 capitalize">
          <Link href={`/detail/${pkmnObj.id}`} className="hover:underline hover:text-red-800 text-red-600">
            {`#${pkmnObj.id} ${pkmnObj.name}`}
          </Link>
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
</Link>