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
		data.forEach(function(element){

			//variables necesarias
			var titulo = element.title;
			var descripcion = element.description;
			var imgTeaser = element.images.teaser;
			var vistas = element.views_count;
			var likes = element.likes_count;
			var comentarios = element.comments_count;
			var linkPage = element.html_url;

			//acortamos la descripcion
			//CON ESTO EFECTIVAMENTE SE ACORTA LA DESCRIPCIÓN, SIN EMBARGO, AL IMPLEMENTARLA SE DESCONFIGURA TODO EL DOM, LO DEJO COMENTADO
			var shortDescription = descripcion.slice(0,120) + "...</p>";
			console.log("shortDescription: " + shortDescription);

			//utilizamos este texto de reemplazo a la descripción
			var textReemplazo = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt omnis nisi excepturi earum at doloribus repellendus tempore atque eaque recusandae, aspernatur!</p>'

			//container-works es la clase donde se anidará todo
			$(".container-works").append('<a href="' + linkPage + '" target="_blank" class="my work" id="work' + data.indexOf(element).toString() + '"><div class="cont-img" id="cont-img' + data.indexOf(element).toString() + '"><img src="' + imgTeaser + '" class="image img-responsive"></img><div class="overlay"><div class="text"><h5>' + titulo + '</h5>' + textReemplazo /*shortDescription*/ + '</div></div></div><div class="cont-icons" id="cont-icons' + data.indexOf(element).toString() + '"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> <span>' + vistas + '</span>  <i class="fa fa-comment" aria-hidden="true"></i> <span>' + comentarios + '</span>  <span class="glyphicon glyphicon-heart" aria-hidden="true"></span> <span>' + likes + '</span></div></a>');

		});
	}

});

