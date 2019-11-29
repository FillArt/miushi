import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import example from "./example";
import sets from "./sets";

export default new Vuex.Store({
  modules: {
    example,
    sets
  }
});
