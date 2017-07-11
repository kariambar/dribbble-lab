/* Acá va todo el jquery */
$(document).ready(function(){

	$.ajax({
		url: 'https://api.dribbble.com/v1/users/eduardo/shots?access_token=048e623fd283c3ec6c16f0fd8e836df52f38208c0a1ecfde510562bd2c9578c8',
		type: 'GET',
		datatype: 'json'
	})
	.done(function(response){
		console.log(response);
		works(response);
	})
	.fail(function(){
		console.log("error");
	});

	function works(data){
		console.log("holi");
		data.forEach(function(element){

			//variables necesarias
			var imgTeaser = element.images.teaser;
			var vistas = element.views_count;
			var likes = element.likes_count;
			var comentarios = element.comments_count;
			var linkPage = element.html_url;

			//container-works es la clase donde se anidará todo

			$(".container-works").append('<a href="' + linkPage + '" target="_blank" class="work" id="work' + data.indexOf(element).toString() + '"><div class="cont-img" id="cont-img' + data.indexOf(element).toString() + '"><img src="' + imgTeaser + '" class="img-responsive"></img></div><div class="cont-icons" id="cont-icons' + data.indexOf(element).toString() + '"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span><span>' + vistas + '</span><span class="glyphicon glyphicon-heart" aria-hidden="true"></span><span>' + likes + '</span><i class="fa fa-comment" aria-hidden="true"></i><span>' + comentarios + '</span></div></a>');

			/*$(".container-works").append('<img src="' + element.images.teaser + '"></img>');
			$(".container-works").append("vistas: " + element.views_count + "\n");
			$(".container-works").append("likes: " + element.likes_count + "\n");
			$(".container-works").append("comentarios: " + element.comments_count + "\n");*/
		});
	}


});

