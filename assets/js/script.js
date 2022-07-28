 
$('.features__wrapper').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	adaptiveHeight: true,
	prevArrow: null,
	nextArrow: null,
	responsive: [
     {
       breakpoint: 1431,
        settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
      },
      {
       breakpoint: 992,
        settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      },
    ]
  });

  let blocked = false;
  let blockTimeout = null;
  let prevDeltaY = 0;
  
 
$('.features__wrapper').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	cc = document.getElementsByTagName('ul')[0].getElementsByTagName('li').length
	$('.features .slick-dots li').css('width', (100/cc)+'%' );
});

  var lastScrollTop = 0;
  $(window).scroll(function(event) {

	  st = $(this).scrollTop();
	  fs1 = $('.features__wrapper');
	  if (st > lastScrollTop)
	  {
   
		var hT = $(fs1).offset().top,
			  hH = $(fs1).outerHeight(),
			  wH = $(window).height(),
			  wS = $(this).scrollTop();
		  if (wS > (hT+hH-wH)){

  $(".features__wrapper").on('mousewheel DOMMouseScroll wheel', (function(e) {
	  let deltaY = e.originalEvent.deltaY;

	
		stops = false
		var dataId = $('.slick-current').attr("data-slick-index");   
 

	if(dataId != 2 &&  deltaY > 0)
	{
		console.log('down');
		stops = true;
	}

	if(dataId != 0 &&  deltaY < 0)
	{
	console.log('up');
		stops = true;
	}
 

	if(stops == true)
	{
		e.preventDefault();
		e.stopPropagation();
	

	  clearTimeout(blockTimeout);
	  blockTimeout = setTimeout(function(){
		  blocked = false;
	  }, 50);
  
	  
	  if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
		  blocked = true;
		  prevDeltaY = deltaY;
  
		  if (deltaY > 0) {
			  $(this).slick('slickNext');
		  } else {
			  $(this).slick('slickPrev');
		  }
	  }

	}

  }));
}
 
}});



/*new Swiper('.features__slider', {
	slidesPerView: 'auto',
	slidesPerGroup: 1,
 
 
 
  	pagination: {
    	el: '.swiper-pagination',
    	type: 'progressbar',
  	},
	  mousewheel: {
		releaseOnEdges: true,
		sensetivity: 1,
	  },
});*/

new Swiper('.roadmap__slider', {
	slidesPerView: 'auto',
	watchOverflow: true,
	initialSlide: 5,
	resizeReInit: true,
});

