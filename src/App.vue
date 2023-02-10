<template>
  <div class="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: { Main },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f8ff;
  background-image: url("./assets/brpokemon.png");

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
