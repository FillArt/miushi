export default {
  state: {
    wok: [
      {
        title: "C говядиной",
        wok: true,
        img: "/assets/img/wok/wok-1.png",
        grams: 400,
        сalory: 1350,
        price: 430,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "С курицей",
        wok: true,
        img: "/assets/img/wok/wok-2.png",
        grams: 400,
        сalory: 1350,
        price: 290,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "С морепродуктами",
        wok: true,
        img: "/assets/img/wok/wok-3.png",
        grams: 400,
        сalory: 1350,
        price: 430,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "C овощами",
        wok: true,
        img: "/assets/img/wok/wok-4.png",
        grams: 400,
        сalory: 1350,
        price: 430,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      }
    ]
  },
  mutations: {
    setState(state, { type, value }) {
      state[type] = value;
    },
    setStateToArray(state, { type, index, value }) {
      for (let key in value) {
        state[type][index][key] = value[key];
      }
      //state[type][index] = value;
    }
  },

  actions: {
    setState(context, { type, value }) {
      context.commit("setState", { type, value });
    },
    setStateToArray(context, { type, index, value }) {
      context.commit("setStateToArray", { type, index, value });
    }
  },

  getters: {
    wok(state) {
      return state.wok;
    }
  }
};
