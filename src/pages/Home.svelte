<script>
  import Card from '../components/common/Card.svelte';
</script>
<div class="h-full flex flex-wrap px-2 sm:px-6 md:px-8 lg:px-12 xl:px-20">
  <div class="h-12 w-full flex flex-wrap mb-8 px-3">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Username">
  </div>
  <div class="h-full flex flex-wrap px-2 w-full">
    <div class="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 px-2">
      <Card />
    </div>
    <div class="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 px-2">
      <Card />
    </div>
    <div class="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 px-2">
      <Card />
    </div>
    <div class="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 px-2">
      <Card />
    </div>
  </div>
</div>

<style>
</style>