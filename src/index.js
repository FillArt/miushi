// JS
import "./js/";

// SCSS
import "./assets/scss/main.scss";

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require("vue");
// Vue components (for use in html)
Vue.component("example-component", require("./components/Example.vue").default);

// Vue init
const app = new Vue({
  el: "#app",
  data: () => ({
    menu: false,
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
  }),
  methods: {
    menuModal() {
      this.menu = !this.menu;
      if (this.menu) {
        document.getElementById("app").classList.add("header-menu--bg");
      } else {
        document.getElementById("app").classList.remove("header-menu--bg");
      }
    },
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
    },

    checkedSlide(val){
        console.log(val)
    }
  },
  mounted() {
    this.initSlider();
    this.checkedSlide(this.sliderActive);
    document.getElementById("kek").checked = true;

    // Перенастройка слайдера при ресайзе окна
    window.addEventListener("resize", () => {
      this.initSlider();
      this.openSlide(this.sliderActive);
    });
  }
});
