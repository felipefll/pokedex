<template>
  <footer>
    <div class="about">
      <img src="../assets/pokebola.png" alt="pokeball" />
      <p>Pokedex</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 10%;
  background: #72a0c1;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .about {
    width: 15%;
    height: 50%;
    background: #f0f8ff;
    color: #0a2351;
    border-radius: 0 10px 0 0;
    font-size: 0.9rem;

    display: flex;
    align-items: center;

    img {
      width: 12%;
      margin: 0 10px;
    }
  }

  .copyright {
    width: 25%;
    height: 50%;
    color: #222222;

    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-size: 0.8rem;
    }

    a {
      font-size: 1.3rem;
      color: #222222;
    }
  }
}

@media only screen and (max-width: 850px) {
  footer {
    height: 5%;
    .about {
      width: 20%;
      height: 90%;

      img {
        width: 10%;
      }
    }

    .copyright {
      width: 30%;
      height: 90%;

      a {
        font-size: 1rem;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  footer {
    display: none;
    .about {
      width: 35%;
      height: 90%;
      justify-content: space-around;

      img {
        width: 10%;
      }
    }

    .copyright {
      width: 55%;
      height: 90%;

      a {
        font-size: 1rem;
      }
    }
  }
}
</style>
