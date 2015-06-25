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
		points-=2;
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

	