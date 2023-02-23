(function ($) {
	
	




	$('.owl-service-item').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  })

	$('.owl-courses-item').owlCarousel({
		items:4,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:4
			  }
		  }
	  })
	

	


})(window.jQuery);