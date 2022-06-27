var URLactual = document.title;

$(function()
{
	'use strict';
	
	/*Mapa*/
	var home= "Cellzone";
	var visitenos= "Visitenos";
	
	if(URLactual === home || URLactual === visitenos){
	   	
		var map= L.map('mapa').setView([12.125817722849822, -86.2542873316622], 30);

		
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([12.125817722849822, -86.2542873316622]).addTo(map)
			.bindPopup('TIENDA CELLZONE.')
			.openPopup();
	}
});

$(function()
{
		'use strict';
	
	
	var windoHeight = $('#headerDinamic').height();
	var barraAltura = $('.barra').innerHeight();

	
	
	$(window).scroll(function()
	{
		var scroll = $(window).scrollTop();
		
		if(scroll > windoHeight)
		{
			$('.barra').addClass('fixed');
			$('body').css({'margin-top' : barraAltura+'px'});
		}else
		{
			$('.barra').removeClass('fixed');
			
			$('body').css({'margin-top' : '0px'});
		}
		
	});
	
	icon();
	
});

function icon()
{
	/*Los del header*/
	/*Facebook*/
	$(".faceH").hover(function(){
		
		$(".faceH").animate(
			{
			 color:'#3b5998'
			},500);
	}, function(){
		$(".faceH").animate(
			{
			 color:'#fff'
			},500);
	});
	
	/*twitter*/
 	$(".twitH").hover(function(){
		
		$(".twitH").animate(
			{
			 color:'#00acee'
			},500);
	}, function(){
		$(".twitH").animate(
			{
			 color:'#fff'
			},500);
	});
	
	/*Instagram*/
	 	$(".instH").hover(function(){
		
		$(".instH").animate(
			{
			 color:'#E1306C'
			},500);
	}, function(){
		$(".instH").animate(
			{
			 color:'#fff'
			},500);
	});
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}