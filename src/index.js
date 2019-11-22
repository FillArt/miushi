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
  }),
  methods: {
    menuModal() {
      this.menu = !this.menu;
      if (this.menu) {
        document.getElementById("app").classList.add("header-menu--bg");
      } else {
        document.getElementById("app").classList.remove("header-menu--bg");
      }
    }
  }
});
