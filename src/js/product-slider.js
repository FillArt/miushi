console.log("Я подключён");
window.addEventListener("load", function() {
  document
    .querySelector(".glider")
    .addEventListener("glider-slide-visible", function(event) {
      var glider = Glider(this);
      console.log("Slide Visible %s", event.detail.slide);
    });
  document
    .querySelector(".glider")
    .addEventListener("glider-slide-hidden", function(event) {
      console.log("Slide Hidden %s", event.detail.slide);
    });
  document
    .querySelector(".glider")
    .addEventListener("glider-refresh", function(event) {
      console.log("Refresh");
    });
  document
    .querySelector(".glider")
    .addEventListener("glider-loaded", function(event) {
      console.log("Loaded");
    });

  window._ = new Glider(document.querySelector(".glider"), {
    slidesToShow: 4, //'auto',
    slidesToScroll: 4,
    itemWidth: 50,
    draggable: true,
    scrollLock: false,
    dots: "#dots",
    rewind: false,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    },
  });
});
