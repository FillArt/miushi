window.addEventListener("load", function() {
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
