///////////////////////////
///        NavBar       //
/////////////////////////

 $(document).ready(function() {

  $(window).scroll(function() {
    console.log('scrolly scroll');
    if($(window).scrollTop() >= 450) {
      $('.socialLinks').css('background', 'pink');
    } else {
      $('.socialLinks').css('background', 'transparent');
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
