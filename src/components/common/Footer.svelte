  <script>
    export let footerTitle;
  </script>

  <footer class="grid-footer text-right text-white bg-black p-3 flex justify-between" role="contentinfo">
    <div class="flex items-center w-6/12">
      <a
        class="text-sm xs:text-sm  sm:text-sm md:text-lg lg:text-xl xl:text-xl font-semibold hover:underline hover:text-red-500 align-middle"
        href="https://github.com/tvmota/svelte-parcel"
        target="blank"
        title={footerTitle}>
          { footerTitle }
      </a>
    </div>
    <div class="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-md font-semibold w-6/12">
      <p>
        Icons made by:
        <a
          class="text-red-700 hover:underline hover:text-red-500"
          href="https://www.flaticon.com/authors/roundicons-freebies"
          target="blank"
          title="Roundicons Freebies">
            Roundicons Freebies
        </a>
        &&
        <a
          class="text-red-700 hover:underline hover:text-red-500"
          href="https://www.flaticon.com/authors/freepik"
          target="blank"
          title="Freepik">
            Freepik
        </a>
        from:
        <a
          class="text-red-700 hover:underline hover:text-red-500"
          href="https://www.flaticon.com/"
          target="blank"
          title="Flaticon">
            flaticon
        </a>
      </p>
      <p>
        Powered by:
        <a
          class="text-red-700 hover:underline hover:text-red-500"
          href="https://pokeapi.co/"
          target="blank"
          title="PokeApi">
            PokéAPI
        </a>
      </p>
    </div>
  </footer>

  <style>
    .grid-footer {
      grid-area: footer;
    }
  </style>