import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import example from "./example";
import sets from "./sets";
import rolls from "./rolls";
import pizza from "./pizza";

export default new Vuex.Store({
  modules: {
    example,
    sets,
    rolls,
    pizza
  }
});
