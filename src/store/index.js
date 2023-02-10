import Vuex from "vuex";
import axios from "axios";

const store = new Vuex.Store({
  state: {
    pokemons: [],
    pokemonSelected: [],
    showDetail: false,
  },
  mutations: {
    getPokemons: (state, data) => {
      state.pokemons = data.results;
    },
  },
  getters: {
    pokemonList: (state) => state.pokemons.map((pokemon) => pokemon),

    showSelected: (state) => state.pokemonSelected,

    showDetails: (state) => state.showDetail,
  },
  actions: {
    async fetchPokemons({ commit }, url) {
      try {
        const { data } = await axios(url);
        commit("getPokemons", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});

export default store;
