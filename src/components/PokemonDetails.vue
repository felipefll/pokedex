<template>
  <section v-if="showDetails">
    <div class="image">
      <p @click="closeDetail"><i class="far fa-times-circle"></i></p>
      <img
        :src="showSelected[0].sprites.other.home.front_default"
        alt="not available sorry"
      />
    </div>
    <div class="status">
      <div class="table-status">
        <div class="title">
          <p>Nº {{ showSelected[0].id }}</p>
          <p>{{ showSelected[0].name }}</p>
        </div>
        <div class="progress-bar">
          <div class="items">
            <p>type:</p>
            <p>hp:</p>
            <p>attack:</p>
            <p>defense:</p>
            <p>sp-atk:</p>
            <p>sp-def:</p>
            <p>speed:</p>
          </div>
          <div class="values">
            <div class="types">
              <p
                class="poke-type"
                v-for="value in showSelected[0].types"
                :key="value"
              >
                {{ value.type.name }}
              </p>
            </div>
            <progress
              :value="showSelected[0].stats[0].base_stat"
              max="100"
              :data-content="showSelected[0].stats[0].base_stat"
            ></progress>
            <progress
              :value="showSelected[0].stats[1].base_stat"
              max="100"
              :data-content="showSelected[0].stats[1].base_stat"
            ></progress>
            <progress
              :value="showSelected[0].stats[2].base_stat"
              max="100"
              :data-content="showSelected[0].stats[2].base_stat"
            ></progress>
            <progress
              :value="showSelected[0].stats[3].base_stat"
              max="100"
              :data-content="showSelected[0].stats[3].base_stat"
            ></progress>
            <progress
              :value="showSelected[0].stats[4].base_stat"
              max="100"
              :data-content="showSelected[0].stats[4].base_stat"
            ></progress>
            <progress
              :value="showSelected[0].stats[5].base_stat"
              max="100"
              :data-content="showSelected[0].stats[5].base_stat"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div>
      <!-- <h1>Evoluções do Pokémon</h1> -->
      <ul>
        <li v-for="evolution in evolutions">
          {{ evolution.species.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";
import axios from "axios";

export default {
  name: "PokemonDetails",
  components: {},
  data() {
    return {
      evolutions: [],
    };
  },
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/evolution-chain/{id}/")
      .then((response) => {
        this.evolutions = response.data.evolutions;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  setup() {
    function closeDetail() {
      store.state.showDetail = false;
    }

    return {
      closeDetail,
    };
  },

  computed: {
    ...mapGetters(["showDetails", "showSelected"]),
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 40%;
  height: 100%;

  .image {
    width: 100%;
    height: 45%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.3rem;
      color: #72a0c1;
      cursor: pointer;
    }

    img {
      width: 60%;
      animation: move 2s infinite alternate;
    }
  }

  .status {
    width: 100%;
    height: 55%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    .table-status {
      width: 95%;
      height: 95%;
      border-radius: 10px;
      overflow: hidden;

      .title {
        width: 100%;
        height: 15%;
        background: #72a0c1;
        text-transform: capitalize;

        display: flex;
        align-items: center;
        justify-content: center;

        p:last-child {
          font-size: 1.2rem;
          margin-left: 10px;
        }
      }

      .progress-bar {
        width: 100%;
        height: 85%;
        background: #b0c4de;

        display: flex;

        .items {
          height: 100%;
          width: 30%;
          padding-left: 10px;

          display: flex;
          flex-direction: column;
          justify-content: space-around;

          p {
            font-size: 0.9rem;
            font-weight: bold;
          }
        }

        .values {
          width: 70%;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          .types {
            width: 100%;
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
              margin: 10px;
              text-transform: capitalize;
            }
          }

          p {
            font-size: 1rem;
            font-weight: bold;
          }

          progress {
            width: 95%;
            position: relative;
          }

          progress:after {
            content: attr(data-content);
            position: absolute;
            top: 0;
            color: #0a2351;
            font-size: 0.7rem;
            margin-left: 5px;
          }

          progress::-webkit-progress-bar {
            background: rgb(214, 245, 255);
            border-radius: 50px;
          }

          progress::-webkit-progress-value {
            border-radius: 50px;
            background: #03b33e;
          }
        }
      }
    }
  }
}

@keyframes move {
  from {
    transform: translateY(-5px);
  }
}

@media only screen and (max-width: 1050px) {
  section {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  section {
    width: 100%;
    height: 40%;
    display: flex;

    .image {
      width: 40%;
      height: 100%;

      p {
        z-index: 2;
      }

      img {
        width: 110%;
      }
    }

    .status {
      width: 60%;
      height: 100%;

      .table-status {
        .title {
          p {
            font-size: 0.8rem;
          }

          p:last-child {
            font-size: 0.9rem;
          }
        }

        .progress-bar {
          .items {
            p {
              font-size: 0.8rem;
            }
          }

          .values {
            .types {
              p {
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
