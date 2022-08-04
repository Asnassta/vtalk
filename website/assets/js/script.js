/*==============Tabs=============*/
  function tabCreate(n)
{
  $('.customer-box_create .tabs-nav a').removeClass('active');
  $('.customer-box_create .tabs-nav a.t'+n).addClass('active');
  $('.customer-box_create .tab-block').fadeOut(0);
  $('.customer-box_create .tab-block.tab_'+n).fadeIn(222);
};

  function tabTrain(n)
{
  $('.customer-box_train .tabs-nav a').removeClass('active');
  $('.customer-box_train .tabs-nav a.t'+n).addClass('active');
  $('.customer-box_train .tab-block').fadeOut(0);
  $('.customer-box_train .tab-block.tab_'+n).fadeIn(222);
};

  function tabAnalyze(n)
{
  $('.customer-box_analyze .tabs-nav a').removeClass('active');
  $('.customer-box_analyze .tabs-nav a.t'+n).addClass('active');
  $('.customer-box_analyze .tab-block').fadeOut(0);
  $('.customer-box_analyze .tab-block.tab_'+n).fadeIn(222);
};

  function tabImprove(n)
{
  $('.customer-box_improve .tabs-nav a').removeClass('active');
  $('.customer-box_improve .tabs-nav a.t'+n).addClass('active');
  $('.customer-box_improve .tab-block').fadeOut(0);
  $('.customer-box_improve .tab-block.tab_'+n).fadeIn(222);
};

  function tabInnovative(n)
{
  $('.innovative__tabs .tabs-nav a').removeClass('active');
  $('.innovative__tabs .tabs-nav a.t'+n).addClass('active');
  $('.innovative__tabs .tab-block').slideUp(0);
  $('.innovative__tabs .tab-block.tab_'+n).fadeIn(444);
  $('.innovative__tabs').attr('id', 'color_'+n);
};
/*==============/tabs=============*/

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