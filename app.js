///////////////////////////
///        NavBar       //
/////////////////////////

 $(document).ready(function() {
  var hero = $('.hero');
  var socialLinks = $('.socialLinks');

  $(window).scroll(function() {
    var top = hero.scrollTop() + hero.height() - socialLinks.height();

    // console.log('scrolly scroll');
    if($(window).scrollTop() >= top) {
      socialLinks.css('background', '#FF6002');
    } else {
      socialLinks.css('background', 'transparent');
    }
  });
});




// window.addEventListener("scroll", function(evt) {
//    var pos_top = document.body.scrollTop;
//    if(pos_top <= 50){
//       $('#test').css('color','#fff');
//       $('.logo').show()
//    }
//
//    else if(pos_top > 50){
//       $('#test').css('color','pink');
//       $('.logo').hide()
//    }
// });
