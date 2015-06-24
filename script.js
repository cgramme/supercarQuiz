var points=0;

$(document).ready(function(){
	$('.wrong').on('click', function(){
		$(this).css({'background':'#f00'});
		points-=1;
		$('.points').html("Points: "+points);
	});

	$('.right').on('click',function(){
		$(this).css({'background':'#0f0'});
		points+=5;
		$('.points').html("Points: "+points);
	});
});

$(window).ready(function(){
});