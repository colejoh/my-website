$(document).ready(function(){
	$(' #projects ').click(function(){
		$('.projects').fadeIn();
	});
	$(' .close ').click(function(){
		$('.projects').fadeOut();
	});
})
