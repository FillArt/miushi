export default {
  state: {
    sets: [
      {
        title: "Cет №10",
        img: "/assets/img/set/set-10.png",
        quantity: 72,
        type: "шт.",
        grams: 1560,
        сalory: 1700,
        price: 2050,
        item: 1,
        hit: true,
        veg: false
      },
      {
        title: "Cет №8",
        img: "/assets/img/set/set-8.png",
        quantity: 24,
        type: "шт.",
        grams: 950,
        сalory: 800,
        price: 1590,
        item: 1,
        hit: false,
        veg: false
      },
      {
        title: "Миниcет №5",
        img: "/assets/img/set/set-5.png",
        quantity: 14,
        type: "шт.",
        grams: 450,
        сalory: 400,
        price: 510,
        item: 1,
        hit: false,
        veg: false
      },
      {
        title: "Cет №6",
        img: "/assets/img/set/set-6.png",
        quantity: 16,
        type: "шт.",
        grams: 460,
        сalory: 490,
        price: 400,
        item: 1,
        hit: false,
        veg: true
      },
      {
        title: "Cет №10",
        img: "/assets/img/set/set-10.png",
        quantity: 72,
        type: "шт.",
        grams: 1560,
        сalory: 1700,
        price: 2050,
        item: 1,
        hit: false,
        veg: false
      },
      {
        title: "Cет №8",
        img: "/assets/img/set/set-8.png",
        quantity: 24,
        type: "шт.",
        grams: 950,
        сalory: 800,
        price: 1590,
        item: 1,
        hit: true,
        veg: false
      },
      {
        title: "Миниcет №5",
        img: "/assets/img/set/set-5.png",
        quantity: 14,
        type: "шт.",
        grams: 450,
        сalory: 400,
        price: 510,
        item: 1,
        hit: false,
        veg: false
      },
      {
        title: "Cет №6",
        img: "/assets/img/set/set-6.png",
        quantity: 16,
        type: "шт.",
        grams: 460,
        сalory: 490,
        price: 400,
        item: 1,
        hit: false,
        veg: true
      },
      {
        title: "Cет №10",
        img: "/assets/img/set/set-10.png",
        quantity: 72,
        type: "шт.",
        grams: 1560,
        сalory: 1700,
        price: 2050,
        item: 1,
        hit: true,
        veg: false
      },
      {
        title: "Cет №8",
        img: "/assets/img/set/set-8.png",
        quantity: 24,
        type: "шт.",
        grams: 950,
        сalory: 800,
        price: 1590,
        item: 1,
        hit: true,
        veg: false
      },
      {
        title: "Миниcет №5",
        img: "/assets/img/set/set-5.png",
        quantity: 14,
        type: "шт.",
        grams: 450,
        сalory: 400,
        price: 510,
        item: 1,
        hit: true,
        veg: false
      },
      {
        title: "Cет №6",
        img: "/assets/img/set/set-6.png",
        quantity: 16,
        type: "шт.",
        grams: 460,
        сalory: 490,
        price: 400,
        item: 1,
        hit: true,
        veg: false
      },
      {
        title: "Cет №10",
        img: "/assets/img/set/set-10.png",
        quantity: 72,
        type: "шт.",
        grams: 1560,
        сalory: 1700,
        price: 2050,
        item: 1,
        hit: false,
        veg: true
      },
      {
        title: "Cет №8",
        img: "/assets/img/set/set-8.png",
        quantity: 24,
        type: "шт.",
        grams: 950,
        сalory: 800,
        price: 1590,
        item: 1,
        hit: false,
        veg: true
      },
      {
        title: "Миниcет №5",
        img: "/assets/img/set/set-5.png",
        quantity: 14,
        type: "шт.",
        grams: 450,
        сalory: 400,
        price: 510,
        item: 1,
        hit: false,
        veg: true
      },
      {
        title: "Cет №6",
        img: "/assets/img/set/set-6.png",
        quantity: 16,
        type: "шт.",
        grams: 460,
        сalory: 490,
        price: 400,
        item: 1,
        hit: false,
        veg: true
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
    sets(state) {
      return state.sets;
    },
    box(state) {
      return state.box;
    }
  }
};
