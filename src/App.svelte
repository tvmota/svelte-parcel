<script>
  import { Router, Route, Link } from 'svero';
  import AppHeader from './components/common/Header.svelte';
  import AppFooter from './components/common/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Detail from './pages/Detail.svelte';
</script>

<div class="grid-box">
  <AppHeader bgColor="bg-red-600" headerTitle="SvelDex" txtColor="text-gray-100"/>
  <main class="grid-main pb-8 px-2 xs:px-2 sm:px-6 md:px-8 lg:px-10 xl:px-10 flex justify-center">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
    </Router>
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