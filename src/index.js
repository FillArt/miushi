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
    slideIndex: 1
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
    plusDivs(n) {
      this.showDivs((this.slideIndex += n));
    },
    showDivs(n) {
      let i;
      const x = document.getElementsByClassName("mySlides");
      if (n > x.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[this.slideIndex - 1].style.display = "block";
    }
  },
  mounted() {
    this.showDivs(this.slideIndex);
  }
});
