$( document ).ready(function() {
    $('.plus-block-1, .plus-block-2, .plus-block-3').hide();
	$('.plus__btn__1').click(function(){
	if ($(this).hasClass('plus__btn')) {
		$('.plus__btn__1').addClass('minus__btn');
		$('.plus__btn__1').removeClass('plus__btn');
    	$('.plus-block-1').slideToggle(500);
	} else
	{
		$('.plus__btn__1').removeClass('minus__btn');
		$('.plus__btn__1').addClass('plus__btn');
	    $('.plus-block-1').slideToggle(500);
    }
	});
	$('.plus__btn__2').click(function(){
		if ($(this).hasClass('plus__btn')) {
			$('.plus__btn__2').addClass('minus__btn');
			$('.plus__btn__2').removeClass('plus__btn');
	    	$('.plus-block-2').slideToggle(500);
		} else
		{
			$('.plus__btn__2').removeClass('minus__btn');
			$('.plus__btn__2').addClass('plus__btn');
		    $('.plus-block-2').slideToggle(500);
	    }
	});
	$('.plus__btn__3').click(function(){
		if ($(this).hasClass('plus__btn')) {
			$('.plus__btn__3').addClass('minus__btn');
			$('.plus__btn__3').removeClass('plus__btn');
	    	$('.plus-block-3').slideToggle(500);
		} else
		{
			$('.plus__btn__3').removeClass('minus__btn');
			$('.plus__btn__3').addClass('plus__btn');
		    $('.plus-block-3').slideToggle(500);
	    }
	});

	$('a.scroll').smoothScroll({
		speed: 1000,
	});

});

$(function(){
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

