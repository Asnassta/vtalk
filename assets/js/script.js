new Swiper('.features__slider', {
	slidesPerView: 'auto',

  	pagination: {
    	el: '.swiper-pagination',
    	type: 'progressbar',
  	},
});

new Swiper('.roadmap__slider', {
	slidesPerView: 'auto',
	watchOverflow: true,
});

