var points=0;

$(document).ready(function(){
});

$(window).ready(function(){
});

	$('body').on('click','button.wrong', function(){
		$(this).css({'background':'#f00'});
		points-=2;
		$('.points').html("Points: "+points);
	});

	$('body').on('click','button.right', function(){
		$(this).css({'background':'#0f0'});
		points+=5;
		$('.points').html("Points: "+points);
	});





$(document).on('pagebeforecreate',function(){console.log('pagebeforecreate');});
$(document).on('pagecreate',function(){console.log('pagecreate');});
$(document).on('pageinit',function(){console.log('pageinit');});
$(document).on('pagebeforehide',function(){console.log('pagebeforehide');});
$(document).on('pagebeforeshow',function(){
	console.log('pagebeforeshow');
	var page = $('body').pagecontainer( 'getActivePage' ).attr( 'id' );
	if(page == "pagequestions"){
		$('.points').html("Points: "+points);
	}
	if(page == "results"){
		$('.total-points').html("Total Points: "+points);

		if(points >= 25){
			$('.rank').html("Your rank:<br>You live and breath supercars!");
		}else if(points >= 20){
			$('.rank').html("Your rank:<br>You are a true connoisseur of fine vehicles!");
		}else if(points >= 15){
			$('.rank').html("Your rank:<br>You really don't know much about cars do you?");
		}else if(points >= 10){
			$('.rank').html("Your rank:<br>You probably live in a cave.");
		}else if(points >= 5){
			$('.rank').html("Your rank:<br>Lets just keep this to ourselves.");
		}

	}
});
$(document).on('pageremove',function(){console.log('pageremove');});
$(document).on('pageshow',function(){console.log('pageshow');});
$(document).on('pagehide',function(){console.log('pagehide');});
$(window).load(function () {console.log("window loaded");});
$(window).unload(function () {console.log("window unloaded");});
$(function () {console.log('document ready');});
	