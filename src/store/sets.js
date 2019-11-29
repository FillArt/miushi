export default {
  state: {
    sets: [
      {
        title: "Cет №10",
        img: "/assets/img/set/set-10.png",
        quantity: 72,
        grams: 1560,
        сalory: 1700,
        price: 2050,
        item: 1
      },
      {
        title: "Cет №8",
        img: "/assets/img/set/set-8.png",
        quantity: 24,
        grams: 950,
        сalory: 800,
        price: 1590,
        item: 1
      },
      {
        title: "Миниcет №5",
        img: "/assets/img/set/set-5.png",
        quantity: 14,
        grams: 450,
        сalory: 400,
        price: 510,
        item: 1
      },
      {
        title: "Cет №6",
        img: "/assets/img/set/set-6.png",
        quantity: 16,
        grams: 460,
        сalory: 490,
        price: 400,
        item: 1
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getSets(state) {
      return state.sets;
    }
  }
};
