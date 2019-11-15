<script>
  import Icon from './Icon.svelte';
  export let msg = "";
</script>

<div class="flex flex-col flex-wrap items-center w-full">
  <Icon iconName="web" size="lg"/>
  <h2 class="py-6 text-3xl font-semibold">{msg}</h2>
</div>