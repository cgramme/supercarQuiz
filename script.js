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

$.mobile.changePage(function(){
		alert("durp boobies");
	});



$(document).on('pagebeforecreate',function(){console.log('pagebeforecreate');});
$(document).on('pagecreate',function(){console.log('pagecreate');});
$(document).on('pageinit',function(){console.log('pageinit');});
$(document).on('pagebeforehide',function(){console.log('pagebeforehide');});
$(document).on('pagebeforeshow',function(){
	console.log('pagebeforeshow');
	$('.points').html("Points: "+points);
});
$(document).on('pageremove',function(){console.log('pageremove');});
$(document).on('pageshow',function(){console.log('pageshow');});
$(document).on('pagehide',function(){console.log('pagehide');});
$(window).load(function () {console.log("window loaded");});
$(window).unload(function () {console.log("window unloaded");});
$(function () {console.log('document ready');});
	