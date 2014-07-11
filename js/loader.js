jQuery(document).ready(function(){
	var winHeight;
	var winWidth;
	var counter = 1;

	$(window).load(function(){
		winHeight = $(window).height();
		winWidth = $(window).width();
		$('section').height(winHeight - 50).width(winWidth);	
		$('section').each(function(){
			$('#smithsonian-' + counter).height(winHeight - 50).width(winWidth);
		});
	});

	$(window).on('resize', function(){
		winHeight = $(window).height();
		winWidth = $(window).width();
		$('.fullpage').height(winHeight - 50).width(winWidth);	
	});

	$('#smithsonian-2').lazyload();
	$('#smithsonian-3').lazyload();
	$('#smithsonian-4').lazyload();
	$('#smithsonian-5').lazyload();
	$('#smithsonian-6').lazyload();
	$('#smithsonian-7').lazyload();
	$('#smithsonian-8').lazyload();
	$('#smithsonian-9').lazyload();
	$('#smithsonian-10').lazyload();
	$('#smithsonian-11').lazyload();
	$('#smithsonian-12').lazyload();
	$('#smithsonian-13').lazyload();
	$('#smithsonian-14').lazyload();
});