$('.carousel').carousel({
  interval: 4000
});


$(document).ready(function(){

  //Navbar scroll fade in and out
  $(window).scroll(function(){
    if($(this).scrollTop() > 100) {
      $('#menu').fadeIn(400);
      $('#menu').css('background-color', '#0B0A0B');
      $('#menu ul li').css('display', 'inline-block');
      $('#logo').css('display', 'block');

        }
    else {
      $('nav').fadeOut(500);
               }
           });

});

