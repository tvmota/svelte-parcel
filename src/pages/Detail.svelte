<script>
  import { beforeUpdate } from 'svelte';
  import { getPkmn, getSpecies } from '../services/PokeService';
  export let router = {};
  let pkmn;

  beforeUpdate(async () => {
    pkmn = await Promise.all([getPkmn(router.params.id), getSpecies(router.params.id)])
    console.log(pkmn)
  });
</script>
<div>
  detail
</div>