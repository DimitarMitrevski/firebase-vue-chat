import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    //logira korisnikot
    login: (state, payload) => {
      //state.commit('setUser',payload);
    },
  },
  modules: {},
});
