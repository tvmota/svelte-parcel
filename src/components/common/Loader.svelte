<div class="h-full w-full fixed bg-loader flex justify-center items-center">
  <div class="pokeball">
    <div class="pokeball-center"></div>
  </div>
</div>

<style>
  @keyframes load {
    0%{transform:rotate(0deg);}
    20%{box-shadow:0 0 80px 40px #00b8ee;}
    40%{border-radius:50%; }
    60%{filter:blur(30px);}
    80%{filter:blur(0.1px);}
    100%{transform:rotate(360deg);}
  }

  .bg-loader {
    background-color: rgb(0, 0, 0, .5);
  }

  .pokeball {
    display: flex;
    justify-content: center;
    align-items: center;
    border:80px solid grey;
    border-bottom:70px solid #ff2d18;
    border-left:70px solid #ff2d18;
    border-right:70px solid white;
    border-top:70px solid white;
    animation:load 1s linear infinite;
    border-radius:100%;
  }

  .pokeball-center {
    display: flex;
    border:5px solid grey;
    background-color:silver;
    box-shadow:0px 0px 10px black;
    border-radius: 50%;
    padding: 22px;
  }
</style>