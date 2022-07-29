$(document).ready(function() {
 /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(this).addClass("active");
      $("[data-scroll]").not(this).removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset
    }, 500);
  });
/*=========/smooth scroll=============*/

/*======Header-menu__links (dropdown)=============*/
  $(".header-menu__drop").hover( function(event) {
    event.preventDefault();
    if ($(window).width() >= 1141){
      $(this).toggleClass("dropdown");
      $(this).find(".header-menu__dropdown").slideToggle(333);   
    }
  });
  $(".header-menu__drop").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 1140){
      $(this).toggleClass("dropdown");
      $(this).find(".header-menu__dropdown").slideToggle(333);   
    }
  });
  /*==========/header-menu__links (dropdown)=========*/

  /*======Menu-toggle=============*/

  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header-menu").toggleClass('active');
  });
  /*==========/menu-toggle=========*/
	
});