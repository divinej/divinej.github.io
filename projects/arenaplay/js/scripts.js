$(document).ready(function () {
   
    // Work Corosul
    $(".how-work-cor").owlCarousel({
        items: 3,
        loop: false,
        nav: false,
        dots: false,
        responsive :{
			0:{
				items:1
			},
			767:{
				items:1
			},
			990:{
				items:3
			},
		}
    });
    $('#prev-work').click(function(){
		$('.how-work-cor').trigger('prev.owl.carousel');
		return false ;
	});
    $('#next-work').click(function(){
		$('.how-work-cor').trigger('next.owl.carousel');
		return false ;
	});

   
    // Team Corosul
    $(".team").owlCarousel({
        items: 4,
        loop: false,
        nav: false,
        dots: false,
        responsive :{
			0:{
				items:1
			},
			767:{
				items:1
			},
			990:{
				items:4
			},
		}
    });
    $('#prev-team').click(function(){
		$('.team').trigger('prev.owl.carousel');
		return false ;
	});
    $('#next-team').click(function(){
		$('.team').trigger('next.owl.carousel');
		return false ;
	});

   
    // Press Corosul
    $(".press-cor").owlCarousel({
        items: 2,
        loop: false,
        nav: false,
        dots: false,
        responsive :{
			0:{
				items:1
			},
			767:{
				items:1
			},
			990:{
				items:2
			},
		}
    });
    $('#prev-press').click(function(){
		$('.press-cor').trigger('prev.owl.carousel');
		return false ;
	});
    $('#next-press').click(function(){
		$('.press-cor').trigger('next.owl.carousel');
		return false ;
    });
    
    // Mobile Menu
	$('.canvasOpen').click(function(){
        $('.canvas-menu').toggleClass('hide');
        return false;
    });
    $('.canvas-close a').click(function(){
        $('.canvas-menu').addClass('hide');
        return false;
    });
   
})