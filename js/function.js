$(document).ready(function(){
	$('.left-license>li>a').click(function(e){
		e.preventDefault();
		$('.license-img-1 img').fadeOut(500).attr('src');
		$('.license-img-1 img').fadeIn(500).attr('src',$(this).attr('data-rel'));
		$('.license-img-2 img').fadeOut(500).attr('src','');
		$('.license-img-2 img').fadeIn(500).attr('src',$(this).attr('data-src'));
		
	});
});