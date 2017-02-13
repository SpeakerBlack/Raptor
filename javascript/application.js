//Buscar
$.ajax({
		data: {query:"daft punk"},
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/track/search",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});

//Obtener informacion de una cancion
$.ajax({
		data: {id:"67238735"},
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/track/getInfo",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});

//Descargar una cancion
$.ajax({
		data: {id:"67238735", id_user:"-1"},
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/track/download",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});

//Insertar un usuario
$.ajax({
		data: {id:"prueba@prueba.com"}, // Ya existe
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/user/insertUser",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});

//Insertar una FAQ
$.ajax({
		data: {id_user:-1,comentario:"Desde el servicio"},
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/user/insertFAQ",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});

//Obtener la canciones descargadas por el usuario
$.ajax({
		data: {id_user:-1},
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/user/getDownloadUser",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});

//Obtener sugerencias
$.ajax({
		data: {id_user:"-1"},
		type: "POST",
		url:  "http://23.105.70.100/Raptor/post/track/getSuggested",
	})
 .done(function( data, textStatus, jqXHR ) {
 		console.log(jQuery.parseJSON(data));		
 })
  .fail(function( jqXHR, textStatus, errorThrown ) {
	    console.log(errorThrown);
});
