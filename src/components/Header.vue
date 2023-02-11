<template>
  <header>
    <div class="all-pokemons">
      <div class="title">
        <h1>Pokemons</h1>
      </div>
      <div class="user">
        <div class="registered">
          <img src="../assets/Pokemon-Logo.png" alt="logo" />
        </div>
      </div>
    </div>
    <div class="search">
      <div class="search-inputs">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar..."
          v-model="state.searchValue"
          @keyup.enter="searchPoke"
        />
        <button @click="searchPoke"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive } from "@vue/reactivity";
import store from "../store/index.js";
import axios from "axios";

export default {
  name: "Header",
  components: {},

  setup() {
    const state = reactive({
      hour: "",
      searchValue: "",
    });

    async function searchPoke() {
      if (state.searchValue.length !== 0) {
        const searched = JSON.parse(localStorage.getItem("pokemons")) || [];
        const pokeRegistered = searched.map((pokemon) => pokemon.name);
        const pokeVerify = pokeRegistered.indexOf(state.searchValue);

        if (pokeVerify === -1) {
          try {
            const { data } = await axios(
              `https://pokeapi.co/api/v2/pokemon/${state.searchValue}`
            );
            store.state.pokemonSelected.splice(0, 1, data);
            store.state.showDetail = true;
            searched.push(data);
            localStorage.setItem("pokemons", JSON.stringify(searched));
            state.searchValue = "";
          } catch (error) {
            alert("Pokemon não encontrado");
            state.searchValue = "";
          }
        } else {
          searched.forEach((pokemon) => {
            if (pokemon.name === state.searchValue) {
              store.state.pokemonSelected.splice(0, 1, pokemon);
              store.state.showDetail = true;
              state.searchValue = "";
            }
          });
        }
      } else {
        alert("Pokemon não encontrado");
      }
    }

    setInterval(() => {
      state.hour = new Date().toLocaleString().substr(11, 5);
    });

    return {
      state,
      searchPoke,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 20%;
  background: #72a0c1;

  .all-pokemons {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    gap: 10px;

    .title {
      width: 60%;
      height: 100%;
      border-radius: 0 35px 35px 0;
      color: #0a2351;
      background: #f0f8ff;

      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 2rem;
        margin-left: 20px;
      }

      svg {
        font-size: 2rem;
        margin: 0 20px;
      }
    }

    .user {
      width: 60%;
      height: 100%;
      border-radius: 35px 0 0 35px;
      overflow: hidden;

      display: flex;

      .registered {
        width: 100%;
        height: 100%;
        background: #f0f8ff;

        display: flex;
        align-items: center;
        justify-content: space-around;

        p {
          font-size: 1.5rem;
          color: #0a2351;
        }

        img {
          width: 30%;
          background: transparent;
        }
      }
    }
  }

  .search {
    width: 100%;
    height: 50%;
    padding: 0 50px;
    margin-left: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-inputs {
      width: 85%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      input {
        height: 50%;
        width: 60%;
        padding-left: 10px;
        margin-right: 10px;
        border-radius: 35px;
        outline: none;
        color: #0a2351;
        background: #f0f8ff;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
      }

      button {
        width: 8%;
        height: 50%;
        border-radius: 35px;
        background: #f0f8ff;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
        cursor: pointer;

        svg {
          font-size: 1rem;
          color: #72a0c1;
        }
      }

      p {
        color: rgb(255, 58, 58);
        margin-left: 10px;
        font-size: 0.9rem;
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  header {
    .all-pokemons {
      .title {
        h1 {
          font-size: 1.2rem;
        }

        svg {
          font-size: 1.7rem;
        }
      }
    }

    .search {
      .search-inputs {
        width: 70%;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  header {
    height: 10%;
    .all-pokemons {
      .title {
        h1 {
          font-size: 0.8rem;
        }

        svg {
          font-size: 1rem;
        }
      }

      .user {
        .registered {
          p {
            font-size: 0.8rem;
          }

          p:last-child {
            display: none;
          }

          img {
            width: 8%;
          }
        }
      }
    }

    .search {
      padding: 0;
      justify-content: space-around;

      .search-inputs {
        justify-content: left;
        width: 60%;

        input {
          width: 60%;
          height: 60%;
        }

        button {
          width: 10%;
          height: 70%;

          svg {
            font-size: 0.8rem;
          }
        }
      }

      .pages {
        height: 80%;
        width: 20%;

        p {
          font-size: 1.1rem;

          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
