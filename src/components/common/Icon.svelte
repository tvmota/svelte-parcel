<script>
  import * as icons from '../../assets/icons/*.svg';
  export let iconName;
  export let size
  export let color = '';
</script>

<svg class="{`${size} ${color} fill-current`}">
  <use xlink:href={icons[iconName]}/>
</svg>

<style>
  .sm {
    height: 1.5rem;
    width: 1.5rem;
  }

  .md {
    height: 2.5rem;
    width: 2.5rem;
  }

  .lg {
    height: 4rem;
    width: 4rem;
  }

  .xl {
    height: 6rem;
    width: 6rem;
  }
</style>