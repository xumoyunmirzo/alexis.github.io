$(document).ready(function(){
	$('.header__burger').click(function(event){
	$('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');	
	});
	$('.slider-main').slick({
		arrows:true,
		dots:true,	
		speed:1000,
		easing:'linear',
		infinite:false,	
		draggable:false,
		touchThreshold:10,
		waitForAnimate:false,
	});
});