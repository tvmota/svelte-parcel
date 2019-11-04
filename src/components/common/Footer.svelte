  <script>
    export let footerTitle;
  </script>

  <footer class="grid-footer text-right text-white bg-black p-3" role="content-info">
    <h2 class="text-xl font-semibold">
      { footerTitle }
    </h2>
  </footer>

  <style>
    .grid-footer {
      grid-area: footer;
    }
  </style>