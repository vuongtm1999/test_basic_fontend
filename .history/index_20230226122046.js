function openNav() {
  document.getElementById("mySidenav").style.width = "90%";
  document.getElementById("mySidenav").style.zIndex = "99";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




$(document).ready(function () {
  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.querySelector(".features-item-2 .features-item-descript__below").innerText = "Not only chat now you can voice chat and make calls to quickly connect with the performer";
      document.querySelector(".features-item-3 .features-item-descript__below").innerText = "You can know the status of repair or work completed while away from home.";
      document.querySelector(".features-item-4 .features-item-descript__below").innerText = "You will feel secure when you see the report image and easily evaluate quality service whenever";
    } else {
      document.querySelector(".features-item-2 .features-item-descript__below").innerHTML = "Not only chat now you can voice chat and make calls <br> to quickly connect with the performer";
      document.querySelector(".features-item-3 .features-item-descript__below").innerHTML = "You can know the status of repair or work completed<br> while away from home.";
      document.querySelector(".features-item-4 .features-item-descript__below").innerHTML = "You will feel secure when you see the report image and easily evaluate quality service whenever";
    }
  }
  
  var x = window.matchMedia("(max-width: 870px) && (max-height:500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

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
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".choose-us__items").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  })

  $(".business-feedback__items").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  $(".top-business__items").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  })


});

