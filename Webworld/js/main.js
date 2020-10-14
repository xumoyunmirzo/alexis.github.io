$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');	
	});
	$('.testimonial__slider').slick({
		arrows:false,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		adaptiveHeight: false,
		easing:'ease',
		autoplay:true,
		autoplaySpeed: 5000,
		pauseOnHover:true,
		
	});
});