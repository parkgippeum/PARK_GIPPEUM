/* aos */
AOS.init({
    duration: 1500
});

/* gage */
document.addEventListener("DOMContentLoaded", function (event) {

  var dflt = {
      min: 0,
      max: 100,
      donut: true,
      gaugeWidthScale: 0.6,
      counter: true,
      hideInnerShadow: true
  }

  var gg1 = new JustGage({
      id: 'gg1',
      value: 85,
      defaults: dflt
  });
  var gg2 = new JustGage({
    id: 'gg2',
    value: 85,
    defaults: dflt
  });
  var gg3 = new JustGage({
    id: 'gg3',
    value: 80,
    defaults: dflt
  });
  var gg4 = new JustGage({
    id: 'gg4',
    value: 70,
    defaults: dflt
  });

});

/* design */
/* $(document).ready(function(){
  $('.thumb').hover(function(){
        $('.main_image img').attr('src',$(this).children('img').attr('src'));
  });
}) */

/* top */
$(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 500) {
$('#top').fadeIn();
} else {
$('top').fadeOut();
}
});

$("#top").click(function() {
$('html, body').animate({
scrollTop: 0
}, 400);
return false;
});
});


