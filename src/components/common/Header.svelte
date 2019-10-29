<script>
  import Icon from './Icon.svelte';
</script>

<header class="grid-header" role="header">
  <h1>Header</h1>    
  <Icon iconName="pkmn" />
</header>

<style>
  .grid-header {
    grid-area: header;  
  }
</style>