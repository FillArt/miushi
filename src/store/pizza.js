export default {
  state: {
    pizza: [
      {
        title: "Баварская",
        img: "/assets/img/pizza/pizza-1.png",
        type: "см.",
        quantity: 33,
        grams: 250,
        сalory: 350,
        price: 260,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "Вегетарианская",
        img: "/assets/img/pizza/pizza-2.png",
        type: "см.",
        quantity: 33,
        grams: 755,
        сalory: 1800,
        price: 380,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Пепперони",
        img: "/assets/img/pizza/pizza-3.png",
        type: "см.",
        quantity: 33,
        grams: 615,
        сalory: 1400,
        price: 450,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "Классическая",
        img: "/assets/img/pizza/pizza-4.png",
        type: "см.",
        quantity: 33,
        grams: 590,
        сalory: 1490,
        price: 390,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "Баварская",
        img: "/assets/img/pizza/pizza-1.png",
        type: "см.",
        quantity: 33,
        grams: 250,
        сalory: 350,
        price: 260,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Вегетарианская",
        img: "/assets/img/pizza/pizza-2.png",
        quantity: 33,
        grams: 755,
        сalory: 1800,
        price: 380,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "Пепперони",
        img: "/assets/img/pizza/pizza-3.png",
        type: "см.",
        quantity: 33,
        grams: 615,
        сalory: 1400,
        price: 450,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Классическая",
        img: "/assets/img/pizza/pizza-4.png",
        type: "см.",
        quantity: 33,
        grams: 590,
        сalory: 1490,
        price: 390,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },

      {
        title: "Баварская",
        img: "/assets/img/pizza/pizza-1.png",
        type: "см.",
        quantity: 33,
        grams: 250,
        сalory: 350,
        price: 260,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "Вегетарианская",
        img: "/assets/img/pizza/pizza-2.png",
        type: "см.",
        quantity: 33,
        grams: 755,
        сalory: 1800,
        price: 380,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Пепперони",
        img: "/assets/img/pizza/pizza-3.png",
        type: "см.",
        quantity: 33,
        grams: 615,
        сalory: 1400,
        price: 450,
        item: 1,
        hit: false,
        veg: false,
        hot: false
      },
      {
        title: "Классическая",
        img: "/assets/img/pizza/pizza-4.png",
        type: "см.",
        quantity: 33,
        grams: 590,
        сalory: 1490,
        price: 390,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },

      {
        title: "Баварская",
        img: "/assets/img/pizza/pizza-1.png",
        type: "см.",
        quantity: 33,
        grams: 250,
        сalory: 350,
        price: 260,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Вегетарианская",
        img: "/assets/img/pizza/pizza-2.png",
        type: "см.",
        quantity: 33,
        grams: 755,
        сalory: 1800,
        price: 380,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Пепперони",
        img: "/assets/img/pizza/pizza-3.png",
        type: "см.",
        quantity: 33,
        grams: 615,
        сalory: 1400,
        price: 450,
        item: 1,
        hit: false,
        veg: false,
        hot: true
      },
      {
        title: "Классическая",
        img: "/assets/img/pizza/pizza-4.png",
        type: "см.",
        quantity: 33,
        grams: 590,
        сalory: 1490,
        price: 390,
        item: 1,
        hit: false,
        veg: false,
        hot: true
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
    pizza(state) {
      return state.pizza;
    }
  }
};
