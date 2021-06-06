$(document).ready(function(){
    $('.port-contents').slick({
        centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
    });
 });