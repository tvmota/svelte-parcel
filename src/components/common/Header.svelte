<script>
  import {link} from 'svelte-spa-router'
  import Icon from './Icon.svelte';

  export let bgColor;
  export let headerTitle;
  export let txtColor;
</script>

<header class="{`${bgColor} grid-header p-3`}" role="banner">
  <nav>
    <ul class="{`${txtColor} flex`}">
      <li>
        <a class="{`${txtColor} flex flex-row items-center text-5xl`}" href="/" use:link>
          <Icon iconName="pkmn" size="lg" color={txtColor}/>
          <span class="ml-4">{ headerTitle }</span>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  .grid-header {
    grid-area: header;  
  }
</style>