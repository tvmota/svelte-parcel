<script>
  import { onMount } from 'svelte';
  import { Router, Route, Link } from 'svero';
  import { getPkmn } from './services/PokeService';
  import AppHeader from './components/common/Header.svelte';
  import AppFooter from './components/common/Footer.svelte';
  // import Loader from './components/common/Loader.svelte';
  import Home from './pages/Home.svelte';
  import Detail from './pages/Detail.svelte';

  onMount(async () => {
    const resp = await getPkmn(9);
    console.log(resp);
  });
</script>

<div class="grid-box">
  <AppHeader bgColor="bg-red-600" headerTitle="SvelDex" txtColor="text-gray-100"/>
  <main class="grid-main py-8 flex justify-center">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Router>
  </main>
  <AppFooter footerTitle="@Tiago Mota // SvelDex"/>
  <!--Loader /-->
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
    grid-gap: 10px;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header header header" "main main main" "footer footer footer";
  }

  .grid-main {
    grid-area: main;
  }
</style>