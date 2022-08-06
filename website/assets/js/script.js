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
  $(".header-menu__drop span").on("click", function() {
    if ($(window).width() >= 992){
      $(this).toggleClass("dropdown");
      $(".header-menu__drop span").not(this).removeClass('dropdown');
      $(".header-menu__drop span").not(this).next().hide();
      $(this).next().fadeToggle(333);   
    }
    else {
      $(this).toggleClass("dropdown");
      $(".header-menu__drop span").not(this).removeClass('dropdown');
      $(".header-menu__drop span").not(this).next().slideUp();
      $(this).next().slideToggle(333);
    }
  });

  $(".header-menu__title").on("click", function() {
    $(this).toggleClass("dropdown");
    $(".header-menu__title").not(this).removeClass('dropdown');
    $(".header-menu__title").not(this).next().slideUp();
    $(this).next().slideToggle(333);   
  });
  /*==========/header-menu__links (dropdown)=========*/

  /*======Menu-toggle=============*/
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header-menu").toggleClass('active');
  });
  /*==========/menu-toggle=========*/
	
});