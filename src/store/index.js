import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import example from "./example";
import sets from "./sets";
import rolls from "./rolls";
import pizza from "./pizza";
import wok from "./wok";
import stock from "./stock";

export default new Vuex.Store({
  modules: {
    example,
    sets,
    rolls,
    pizza,
    wok,
    stock
  }
});
