var points=0;

$(document).ready(function(){
});

$(window).ready(function(){
});

	$('body').on('click','button.wrong', function(){
		$(this).css({'background':'#f00'});
		points-=1;
		$('.points').html("Points: "+points);
	});

	$('body').on('click','button.right', function(){
		$(this).css({'background':'#0f0'});
		points+=5;
		$('.points').html("Points: "+points);
	});

	