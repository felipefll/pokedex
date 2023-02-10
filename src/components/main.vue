<template>
  <main>
    <Header />
    <div class="display">
      <PokemonDetails />
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import PokemonDetails from "./PokemonDetails.vue";

export default {
  name: "Main",
  components: { Header, Footer, PokemonDetails },
};
</script>

<style lang="scss" scoped>
main {
  width: 80%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);

  .display {
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f0f8ff;
  }
}

@media only screen and (max-width: 1050px) {
  main {
    width: 90%;
  }
}

@media only screen and (max-width: 850px) {
  main {
    width: 95%;

    .display {
      height: 75%;
    }
  }
}

@media only screen and (max-width: 600px) {
  main {
    width: 100%;
    height: 100%;

    .display {
      height: 90%;

      flex-direction: column;
    }
  }
}
</style>
