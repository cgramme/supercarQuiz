var points=0;
$(document).ready(function(){
});
$(window).ready(function(){
});
	$('body').on('click','button.wrong', function(){
		$(this).css({'background':'#f00'}).addClass('button-zoom').delay(500).queue(function(next){
			$(this).removeClass('button-zoom').css({'background':'#111'});
			next();
		});
		points-=2;
		$('.points').html("Points: "+points).css({'color':'#f00','background':'#fff'}).addClass('button-zoom').delay(500).queue(function(next){
			$(this).removeClass('button-zoom').css({'color':'#fff','background':'#222'});
			next();
		});;
	});
	$('body').on('click','button.right', function(){
		$(this).css({'background':'#0f0'}).addClass('button-zoom').delay(500).queue(function(next){
			$(this).removeClass('button-zoom').css({'background':'#111'});
			next();
		});
		$('.points').html("Points: "+points).css({'color':'#0f0'}).addClass('button-zoom').delay(500).queue(function(next){
			$(this).removeClass('button-zoom').css({'color':'#fff'});
			next();
		});;
		points+=5;
		$('.points').html("Points: "+points);
	});
$(document).on('pagebeforeshow',function(){
	console.log('pagebeforeshow');
	var page = $('body').pagecontainer( 'getActivePage' ).attr( 'id' );
	if(page == "pagequestions"){
		$('.points').html("Points: "+points);
	}
	if(page == "results"){
		$('.total-points').html("Total Points: "+points);
		if(points >= 85){
			$('.rank').html("<b>Your rank:</b><br><i>\"You live and breathe supercars!\"</i>");
			$('.total-points').css({'color':'#0f0'});
		}else if(points >= 70){
			$('.rank').html("<b>Your rank:</b><br><i>\"You are a true connoisseur of fine vehicles!</i>\"");
			$('.total-points').css({'color':'#0f0'});
		}else if(points >= 50){
			$('.rank').html("<b>Your rank:</b><br><i>\"You really don't know much about supercars do you?\"</i>");
			$('.total-points').css({'color':'#f00'});
		}else if(points >= 35){
			$('.rank').html("<b>Your rank:</b><br><i>\"You probably live in a cave.\"</i>");
			$('.total-points').css({'color':'#f00'});
		}else if(points >= 20){
			$('.rank').html("<b>Your rank:</b><br><i>\"Lets just keep this to ourselves.\"</i>");
			$('.total-points').css({'color':'#f00'});
		}else if(points <= 19){
			$('.rank').html("<b>Your rank:</b><br><i>\"Let me try and put this nicely... um, nevermind.\"<i>");
			$('.total-points').css({'color':'#f00'});
		}
	}
});
$(document).on('pageinit', function() {
});

	