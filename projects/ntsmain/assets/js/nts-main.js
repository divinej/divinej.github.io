$(document).ready(function() {
    $('.client-slider').slick({
  arrows: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
	infinite: false,
    prevArrow: '<span class="prev"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
})