$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__mob-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider__body').slick({
		arrows:false,
		dots:true,
		speed:1000,
		easing:'linear',
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnDotsHover:true,
		draggable:true,
		waitForAnimate:false,
	});

	//Прокрутка к блоку при нажатии на кнопку
	$('.down-link').click(function(event) {
		$('html, body').animate ({
	    	scrollTop: $($(this).attr('href')).offset().top + "px"
	    }, 800);
	    return false;  
	}); 
	//======================================

	//Фильтр меню
	let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    }); 
    //====================================== 

    //Стрелка вверх
    function backToTop() {
    	let button = $('.back-to-top');

    	$(window).scroll(function(event) {
    		if($(this).scrollTop() >= 200) {
    			button.fadeIn();
    		} else {
    			button.fadeOut();
    		}
    	});

    	button.click(function(e) {
    		e.preventDefault();
    		$('html').animate({scrollTop: 0}, 1000);
    	})
    }

    backToTop();
   //======================================   

});