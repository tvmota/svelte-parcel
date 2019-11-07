<script>
  export let text;
  export let badgeColor;
</script>

<span class="{`${badgeColor} capitalize inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-extrabold text-gray-100 border`}">
  { text }
</span>

<style>
 .normal {
    background-color: #A8A878;
    border-color: #6F7F59;
  }

  .fire {
    background-color: #F08030;
    border-color: #D59527;
  }

  .fighting {
    background-color: #C03028;
    border-color: #7C161F;
  }

  .water {
    background-color: #6890F0;
    border-color: #5963D4;
  }

  .flying {
    background-color: #A890F0;
    border-color: #9E6AB7;
  }

  .grass {
    background-color: #78C850;
    border-color: #399942;
  }

  .poison {
    background-color: #5a3696;
    border-color: #2F2061;
  }

  .electric {
    background-color: #F8D030;
    border-color: #DADC27;
  }

  .ground {
    background-color: #E0C068;
    border-color: #9CAB4B;
  }

  .psychic {
    background-color: #F85888;
    border-color: #A03464;
  }

  .rock {
    background-color: #B8A038;
    border-color: #758D27;
  }

  .ice {
    background-color: #98D8D8;
    border-color: #708EA4;
  }

  .bug {
    background-color: #A8B820;
    border-color: #4D8E14;
  }

  .dragon {
    background-color: #7038F8;
    border-color: #862EDC;
  }

  .ghost {
    background-color: #705898;
    border-color: #694074;
  }

  .dark {
    background-color: #705848;
    border-color: #554F35;
  }

  .steel {
    background-color: #B8B8D0;
    border-color: #92899D;
  }

  .fairy {
    background-color: #EE99AC;
    border-color: #D28585;
  }
</style>