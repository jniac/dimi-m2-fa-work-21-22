function parallaxFade() {
	const scrollPos = $(document.body).scrollTop();
	$('#box').css({
		'background-position' : '80% ' + (-scrollPos/4)+"px"
	});
	$('#boxtext').css({
		'margin-top': (scrollPos/10)+"px",
		'opacity': 1-(scrollPos/100)
	});
}
function parallaxFadeTwo() {
	const scrollPosTwo = $(document.body).scrollTop();
	$('.hero').css({
		'background-position' : '50% ' + (-scrollPosTwo/4)+"px"
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
	$(window).scroll(function() {
		parallaxFadeTwo();
	});
});

