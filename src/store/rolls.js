export default {
    state: {
        rolls: [
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                type: 'шт.',
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: false,
                veg: false,
                hot: false
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                type: 'шт.',
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false,
                hot: true,
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                type: 'шт.',
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false,
                hot: false
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                type: 'шт.',
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: false,
                hot: false
            },
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                type: 'шт.',
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: true,
                veg: false,
                hot: true,
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                type: 'шт.',
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false,
                hot: false,
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                type: 'шт.',
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false,
                hot: true,
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                type: 'шт.',
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: false,
                hot: false
            },
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                type: 'шт.',
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: false,
                veg: false,
                hot: false,
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                type: 'шт.',
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false,
                hot: true,
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                type: 'шт.',
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false,
                hot: false,
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                type: 'шт.',
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: true,
                hot: true,
            },
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                type: 'шт.',
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: false,
                veg: false,
                hot: true
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                type: 'шт.',
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false,
                hot: true,
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                type: 'шт.',
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false,
                hot: true,
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                type: 'шт.',
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: false,
                hot: true,
            },
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
        rolls(state) {
            return state.rolls;
        }
    }
};
