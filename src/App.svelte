<script>
  import Icon from './components/common/icon/Icon.svelte';
</script>
<div class="grid-box">
  <header class="grid-header" role="header">
    <h1>Header</h1>    
  </header>
  <main class="grid-main">
    <div class="teste bg-black"></div>
    <Icon iconName="pkmn"/>
  </main>
  <footer class="grid-footer" role="content-info">
    <h2>footer</h2>
  </footer>
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

  .grid-header {
    grid-area: header;  
  }

  .grid-footer {
    grid-area: footer;
  }
</style>