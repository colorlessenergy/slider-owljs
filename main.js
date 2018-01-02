$(document).ready(function ( ) {
  var heroSlider = $('.owl-carousel');
  heroSlider.owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ['<-', '->'],
    autoplay: true,
    autoplayTimeOut: 5000,
    dots: false
  });

  heroSlider.on("changed.owl.carousel", function (event) {
    // selecting the current active item
    var item = event.item.index-2;
    $('h3').removeClass('animated jackInTheBox');
    $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated jackInTheBox')
  })

})