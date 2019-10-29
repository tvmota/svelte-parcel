<script>
  import { Router, Route, Link } from 'svero';
  import AppHeader from './components/common/Header.svelte';
  import AppFooter from './components/common/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Detail from './pages/Detail.svelte';
</script>

<div class="grid-box">
  <AppHeader />
  <main class="grid-main">
    <Link href="/">home</Link>
    <Link href="/detail">detail</Link>
    <div class="teste bg-black"></div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Router>
  </main>
  <AppFooter />
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