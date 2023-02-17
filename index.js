$(document).ready(function () {
  $(".image-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'>
                  <img src="./asset/img/Arrow - Left 2.png" alt="Arrow - Left 2" />
                </button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'>
                  <img src="./asset/img/Arrow - Right 2.png" alt="Arrow - Right 2" />
                </button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});