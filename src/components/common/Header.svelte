<script>
  import { Link } from 'svero';
  import Icon from './Icon.svelte';
  export let bgColor;
  export let headerTitle;
  export let txtColor;
</script>

<header class="{`${bgColor} grid-header p-2`}" role="banner">
  <nav>
    <ul class="{`${txtColor} flex`}">
      <li>
        <Link className="{`${txtColor} flex flex-row items-center text-5xl`}" href="/">
          <Icon iconName="pkmn" size="lg" color={txtColor}/>
          { headerTitle }
        </Link>
      </li>
    </ul>
  </nav>
</header>

<style>
  .grid-header {
    grid-area: header;  
  }
</style>