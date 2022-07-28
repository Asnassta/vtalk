new Swiper('.features__slider', {
	slidesPerView: 'auto',
	slidesPerGroup: 1,
  	pagination: {
    	el: '.swiper-pagination',
    	type: 'progressbar',
  	},
});

new Swiper('.roadmap__slider', {
	slidesPerView: 'auto',
	watchOverflow: true,
	initialSlide: 5,
});

