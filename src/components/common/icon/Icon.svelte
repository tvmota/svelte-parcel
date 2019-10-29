<script>
  import { beforeUpdate } from 'svelte';
  import * as icons from '../../../assets/icons/*.svg';
  export let iconName;
</script>

<svg>
  <use xlink:href={icons[iconName]}/>
</svg>

<style>
  svg {
    height: 40px;
    width: 40px;
  }
</style>