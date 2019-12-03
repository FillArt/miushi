export default {
    state: {
        rolls: [
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: true,
                veg: false
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: true
            },
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: true,
                veg: false
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: true
            },
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: true,
                veg: false
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-5.png",
                quantity: 8,
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: true
            },
            {
                title: "Кунсей батакон",
                img: "/assets/img/rolls/rolls-1.png",
                quantity: 8,
                grams: 250,
                сalory: 350,
                price: 260,
                item: 1,
                hit: true,
                veg: false
            },
            {
                title: "Унаги диру",
                img: "/assets/img/rolls/rolls-2.png",
                quantity: 8,
                grams: 960,
                сalory: 800,
                price: 280,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Филадельфия",
                img: "/assets/img/rolls/rolls-3.png",
                quantity: 8,
                grams: 450,
                сalory: 400,
                price: 400,
                item: 1,
                hit: false,
                veg: false
            },
            {
                title: "Мексиканский",
                img: "/assets/img/rolls/rolls-4.png",
                quantity: 8,
                grams: 460,
                сalory: 490,
                price: 290,
                item: 1,
                hit: false,
                veg: true
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
