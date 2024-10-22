$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    rtl: false,
    loop: false,
    margin: 10,
    nav: false,
    center:true,
    stagePadding: 25,

    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  })
});

AOS.init();