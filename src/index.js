// JS
import "./js/";
import "./js/glider.min";
import "./js/product-slider";

// SCSS
import "./assets/scss/main.scss";

// CSS (example)
import "./assets/css/glider.min.css";

// Vue.js
window.Vue = require("vue");
import store from "./store/index";

import { mapActions, mapGetters } from "vuex";
// Vue components (for use in html)
Vue.component("example-component", require("./components/Example.vue").default);

// Vue init
const app = new Vue({
  store,
  el: "#app",
  data: () => ({
    menu: false,
    styleButton: true,
    stockStyle: true,
    productCounter: 0,
    sliderAllCount: 0,
    sliderActive: 1,
    sliderOffsetLeft: 0,
    sliderOffsetStep: 0,
    sliderList: [
      {
        img: "/assets/img/main-slider.jpg",
        title: "Счастливые часы",
        subtitle: "11:00 до 16:00 в будние дни",
        discount: true,
        sumDiscount: 15
      },
      {
        img: "/assets/img/main-slider.jpg",
        title: "Счастливые часы",
        subtitle: "11:00 до 16:00 в будние дни",
        discount: false,
        sumDiscount: 20
      },
      {
        img: "/assets/img/main-slider.jpg",
        title: "Счастливые часы",
        subtitle: "11:00 до 16:00 в будние дни",
        discount: true,
        sumDiscount: 99
      }
    ]
    //---------------------
  }),
  methods: {
    ...mapActions(["setState", "setStateToArray"]),
    menuModal() {
      this.menu = !this.menu;
      if (this.menu) {
        document.getElementById("app").classList.add("header-menu--bg");
      } else {
        document.getElementById("app").classList.remove("header-menu--bg");
      }
    },
    //Main-Slider ---------------------------------------
    initSlider() {
      // Получаем элементы сладера и его слайдов
      let sliderBody = this.$el.querySelector(".js-slider");
      let sliderSlidies = sliderBody.querySelectorAll(".js-slide");
      // Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = sliderBody.clientWidth;
      // Общее количество слайдов для стопов
      this.sliderAllCount = sliderSlidies.length;
    },
    // Открыть слайд по номеру
    openSlide(id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id;
        // Сдвигаем элемент со слайдами
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },
    // Следующий слайд
    nextSlide() {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
      }
    },
    // Предыдущий слайд
    prevSlide() {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;
        this.openSlide(this.sliderActive);
      }
    }
    //---------------------------------------------------
  },
  computed: {
    ...mapGetters(["sets", "rolls", "pizza", "wok", "stock", "title"])
  },
  watch: {
    sliderActive() {
      for (let i = 1; i <= this.sliderAllCount; i++) {
        if (this.sliderActive === i) {
          document.getElementById([`main-slide--` + i]).checked = true;
        }
      }
    }
  },
  created() {
    /*this.setStateToArray({
      type: "sets",
      index: 0,
      value: {
        title: "Test",
        price: 20000
      }
    }); */
  },
  mounted() {
    this.initSlider();
    // Перенастройка слайдера при ресайзе окна
    window.addEventListener("resize", () => {
      this.initSlider();
      this.openSlide(this.sliderActive);
    });
  }
});
