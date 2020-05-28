<script>
  import Router from 'svelte-spa-router';
  import { ChunkGenerator } from 'svelte-spa-chunk'
  import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
  import AppHeader from './components/common/Header.svelte';
  import AppFooter from './components/common/Footer.svelte';

  const Chunk = ChunkGenerator(ChunkComponent)
  const routes = {
    '/': Chunk(() => import('./pages/Home.svelte')),
    '/detail/:id': Chunk(() => import('./pages/Detail.svelte')),
    '*': Chunk(() => import('./pages/Home.svelte')),
  };
</script>

<div class="grid-box">
  <AppHeader bgColor="bg-red-600" headerTitle="SvelDex" txtColor="text-gray-100"/>
  <main class="grid-main pb-8 px-2 xs:px-2 sm:px-6 md:px-8 lg:px-10 xl:px-10 flex justify-center">
    <Router {routes}/>
  </main>
  <AppFooter footerTitle="@Tiago Mota // SvelDex"/>
</div>

<style>
  h1 {
    color: purple;
  }

  .teste {
    height: 40px;
  }

  .grid-box {
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header header header" "main main main" "footer footer footer";
  }

  .grid-main {
    grid-area: main;
  }
</style>