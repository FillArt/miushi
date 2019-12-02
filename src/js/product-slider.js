window.addEventListener("load", function() {
  window._ = new Glider(document.querySelector(".glider"), {
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4, //'auto',
          slidesToScroll: 4,
          itemWidth: 150,
          draggable: true,
          scrollLock: false,
          dots: "#dots",
          rewind: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150
        }
      }
    ]
  });
});
