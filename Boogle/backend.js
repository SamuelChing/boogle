
/*
	Recupera los valores por coockies
	Llama a la búsqueda de la página principal
*/
function init()
{
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var queries = queryString.split("&");					
	buscarLibroArriba(queries[0],queries[1]);
}
init();
/*
	Presenta la información del libro en articulos
	Crea elementos dinamicos para mostrar los libros
*/			
function display_informacion(titulo,autor,calificacion,descripcion,ImagenUrl,editorial,ibcn,categoria,idioma,anno)
{						
	//	Se crea un nuevo elemento articulo
	var article_libros = document.createElement("article");
	//	Se accede al section y se inserta 
	document.getElementById("section_libros").appendChild(article_libros);			
	//	Se setea la clase del nuevo elemento
	article_libros.classList.add("articulo_libro");

	//	Se crea el campo imagen
	var Imagen = document.createElement("img");         // Create a text node
	article_libros.appendChild(Imagen);
	//	Se setea la clase de la imagen
	Imagen.classList.add("imagen_libro");				
	//	Se setea ala imagen 
	Imagen.src = ImagenUrl;				
	Imagen.onclick = function verDetalles()
	{															
		//	Se limpia el componente
		document.getElementById("section_libros").innerHTML="";						
		//	Se crea un nuevo elemento articulo
		var article_detalle = document.createElement("article");
		//	Se accede al section y se inserta 
		document.getElementById("section_libros").appendChild(article_detalle);			
		//	Se setea la clase del nuevo elemento
		article_detalle.classList.add("articulo_detalle");

		//	Se crea el campo imagen
		var imagen_detalle = document.createElement("img");         // Create a text node
		article_detalle.appendChild(imagen_detalle);
		//	Se setea la clase de la imagen
		imagen_detalle.classList.add("imagen_detalle");				
		//	Se setea ala imagen 
		imagen_detalle.src = ImagenUrl;

		//	Se crea un nuevo elemento div
		var div_detalle = document.createElement("div");
		//	Se accede al section y se inserta 
		article_detalle.appendChild(div_detalle);
		//	Se setea la clase de la imagen
		div_detalle.classList.add("contenedor_info_detalle");

		//	Se crea un nuevo componente
		var p_titulo = document.createElement("p"); 
		var textTitulo = document.createTextNode(titulo); 
		p_titulo.appendChild(textTitulo);
		p_titulo.classList.add("titulo-autor");
		div_detalle.appendChild(p_titulo);
		

		//	Se crea un nuevo componente
		var p_calificacion = document.createElement("p");
		var textCalificacion = "";	
		var integer = parseInt(calificacion, 10)					

		if(integer == 5)
		{
			textCalificacion = document.createTextNode("★★★★★"); 
		}
		if(integer == 4)
		{
			textCalificacion = document.createTextNode("★★★★"); 
		}
		if(integer == 3)
		{
			textCalificacion = document.createTextNode("★★★"); 
		}
		if(integer == 2)
		{
			textCalificacion = document.createTextNode("★★"); 
		}
		if(integer == 1)
		{
			textCalificacion = document.createTextNode("★"); 
		}
		if(integer == 0)
		{
			textCalificacion = document.createTextNode("");
		}
		
		p_calificacion.appendChild(textCalificacion);
		div_detalle.appendChild(p_calificacion);
		p_calificacion.classList.add("calificacion");

		//	Se crea un nuevo componente
		var p_autor = document.createElement("p");
		var textAutor = document.createTextNode(autor); 
		p_autor.appendChild(textAutor);
		p_autor.classList.add("titulo-autor");
		div_detalle.appendChild(p_autor);

		//	Se crea un nuevo componente
		var p_descripcion = document.createElement("p");
		var textDescripcion = document.createTextNode(descripcion); 
		p_descripcion.appendChild(textDescripcion);	
		p_descripcion.classList.add("descripcion");
		div_detalle.appendChild(p_descripcion);	

		//	Se crea un nuevo componente
		var p_editorial = document.createElement("p");
		var textEditorial = document.createTextNode(editorial); 
		p_editorial.appendChild(textEditorial);	
		p_editorial.classList.add("titulo-autor");
		div_detalle.appendChild(p_editorial);	
		
		//	Se crea un nuevo componente
		var p_ibcn = document.createElement("p");
		var textibcn = document.createTextNode(ibcn); 
		p_ibcn.appendChild(textibcn);	
		p_ibcn.classList.add("titulo-autor");
		div_detalle.appendChild(p_ibcn);	

		//	Se crea un nuevo componente
		var p_categoria = document.createElement("p");
		var textCategoria = document.createTextNode(categoria); 
		p_categoria.appendChild(textCategoria);	
		p_categoria.classList.add("titulo-autor");
		div_detalle.appendChild(p_categoria);

		//	Se crea un nuevo componente
		var p_idioma = document.createElement("p");
		var textIdioma = document.createTextNode(idioma); 
		p_idioma.appendChild(textIdioma);	
		p_idioma.classList.add("titulo-autor");
		div_detalle.appendChild(p_idioma);

		//	Se crea un nuevo componente
		var p_anno = document.createElement("p");
		var textAnno = document.createTextNode(anno); 
		p_anno.appendChild(textAnno);	
		p_anno.classList.add("titulo-autor");
		div_detalle.appendChild(p_anno);

	//#########################################################################################################################
	}				

	//	Se crea un nuevo elemento div
	var div = document.createElement("div");
	//	Se accede al section y se inserta 
	article_libros.appendChild(div);
	//	Se setea la clase de la imagen
	div.classList.add("contenedor_info_libro");

	//	Se crea un nuevo componente
	var p_titulo = document.createElement("p"); 
	var textTitulo = document.createTextNode(titulo); 
	p_titulo.appendChild(textTitulo);
	p_titulo.classList.add("titulo-autor");
	div.appendChild(p_titulo);
	

	//	Se crea un nuevo componente
	var p_calificacion = document.createElement("p");
	var textCalificacion = "";	
	var integer = parseInt(calificacion, 10)					
	if(integer == 5)
	{
		textCalificacion = document.createTextNode("★★★★★"); 
	}
	if(integer == 4)
	{
		textCalificacion = document.createTextNode("★★★★"); 
	}
	if(integer == 3)
	{
		textCalificacion = document.createTextNode("★★★"); 
	}
	if(integer == 2)
	{
		textCalificacion = document.createTextNode("★★"); 
	}
	if(integer == 1)
	{
		textCalificacion = document.createTextNode("★"); 
	}
	if(integer == 0)
	{
		textCalificacion = document.createTextNode("");
	}
	
	p_calificacion.appendChild(textCalificacion);
	div.appendChild(p_calificacion);
	p_calificacion.classList.add("calificacion");

	//	Se crea un nuevo componente
	var p_autor = document.createElement("p");
	var textAutor = document.createTextNode(autor); 
	p_autor.appendChild(textAutor);
	p_autor.classList.add("titulo-autor");
	div.appendChild(p_autor);

	//	Se crea un nuevo componente
	var p_descripcion = document.createElement("p");
	var textDescripcion = document.createTextNode(descripcion); 
	p_descripcion.appendChild(textDescripcion);	
	p_descripcion.classList.add("descripcion");
	div.appendChild(p_descripcion);		

}
/*
	Abrir la siguiente pagina
	Verificar que los filtros haya uno al menos
	Solicitar la consulta de búsqueda
*/
function buscarLibroAbajo() 
{				
	//	Segmento de variables f_ : filtro 
	var f_categoria = "";
	var f_idioma = "";
	var f_anno = "";
	var f_numero_estrellas = 0;

	//	Ciclo para conseguir el número de estrellas seleccionado
	for (var i = 1; i < 6; i++)
	{
		var name = "radio"+i;
		var bandera = document.getElementById(name).checked;
		if(bandera == true)
		{
			f_numero_estrellas = document.getElementById(name).value;
		}					
	}
	//	Se limpia el componente
	document.getElementById("section_libros").innerHTML="";	
	var titulo_autor = document.getElementById("combobox").value;
	//	Se obtiene el valor de la barra de búsqueda
	var f_valor_barra = document.getElementById("barra").value;
	//	Se obtiene la categoria
	f_categoria = document.getElementById("comboboxCategoria").value;	
	//	Se obtiene el idioma
	f_idioma = document.getElementById("comboboxIdioma").value;
	//	Se obtiene el año
	f_anno = document.getElementById("comboboxAnno").value;

	//	SE HACE LA SIGUIENTE CONSULTA Y USAR EJEMPLO PARA MOSTRAR LOS DATOS CON LA FUNCIÓN DISPLAY INFORMACION	
	var option;
		var imgUrl,desc,calificacion,nombre,autor,id,isbn,idioma,editorial,categoria,fecha; 
		var m,n         					        
    if(String(titulo_autor) == "Nombre")
    {			          		
       option="intitle:"
    }		           
    else
    {
        option="inauthor:"
    } 		 	
	 $.ajax(
        {			         	
        	
        	url:'https://www.googleapis.com/books/v1/volumes?q='+option+'"'+f_valor_barra+'"'+'+subject:'+'"'+f_categoria+'"'+"&maxResults=40",
            success: function(json)
            {			               	                
            	for (var item = 0; item < json.items.length; item++)
            	{		  
            		   		                		
            		//	Arreglar esto SAMUEL
            		if(json.items[item].volumeInfo.title===undefined){
            			nombre="nombre no disponible";
            		}
            		else{
            			nombre=json.items[item].volumeInfo.title;
            		}
            		if(json.items[item].volumeInfo.authors===undefined){
            			autor="autor no disponible";
            		}
            		else{
            			autor=json.items[item].volumeInfo.authors[0];
            		}
            		//Verifica si la descripcion esta disponible
            		if(json.items[item].volumeInfo.description===undefined){
            			desc="No description";
            		}
            		else{
            			desc=json.items[item].volumeInfo.description;
            		}
            		if(json.items[item].volumeInfo.id===undefined){
            			id="sin id";
            		}
            		else{
            			 id=json.items[item].volumeInfo.id;
            		}
            		if(json.items[item].volumeInfo.imageLinks===undefined){
            			imgUrl="https://t3.ftcdn.net/jpg/02/07/87/76/160_F_207877694_pjYJjbYH1ERRAZvIt0qvho6AEnJhHvXx.jpg";
            		}
            		else{
            			imgUrl=json.items[item].volumeInfo.imageLinks.thumbnail;
            		}
            		if(json.items[item].volumeInfo.industryIdentifiers===undefined){
            			isbn ="";
            		}
            		else{
            			isbn=json.items[item].volumeInfo.industryIdentifiers[0].identifier;
            		}
            		if(json.items[item].volumeInfo.categories===undefined){
            			categoria="";
            		}
            		else{
            			categoria=json.items[item].volumeInfo.categories[0];
            		}
            		if(json.items[item].volumeInfo.publisher===undefined){
            			editorial="";
            		}
            		else{
            			editorial=json.items[item].volumeInfo.publisher;
            		}
            		if(json.items[item].volumeInfo.publishedDate===undefined){
            			fecha="";
            		}
            		else{
            			var fecha_anno;
            			fecha=json.items[item].volumeInfo.publishedDate;
            			fecha_anno=fecha.split("-");

            		}
            		if(json.items[item].volumeInfo.language===undefined){
            			idioma="";
            		}
            		else{
            			idioma=json.items[item].volumeInfo.language;

            		}
            		if(json.items[item].volumeInfo.averageRating===undefined){
            			calificacion="0";
            		}
            		else{
            			
            			calificacion=json.items[item].volumeInfo.averageRating;
            			n=parseInt(calificacion, 10);	
            			m=parseInt(f_numero_estrellas,10);
            		}
            		
            		//Se debe hablar sobre cosas sin calificación
            		//Problemas con lo length

            		//If para verificar con los filtros
            		if(f_idioma===idioma && f_anno===fecha_anno[0] && n==m){
            			console.log("Si hay información");
	                	display_informacion(nombre,autor,calificacion,desc,imgUrl,editorial,isbn,categoria,idioma,fecha);
	            	}
	            	else{
	            		//caso de que no coincidan, no se debería hacer nada
	            		console.log("Sin resultados\n");
	            	}
            	}
            				                
    		}
        })	

}
/*
Esta función busca recomendaciones de un libro
Entradas: nombre,autor, categoría y número de resultados
Salida: display al usuario (img, nombre)
Restricciones: acceso a internet
*/

function buscarRecomendaciones(p_nombre,p_autor,p_categoria,n){
	var subject;
	var author;
	if(!(p_autor===undefined || p_autor==="")){
		author='inauthor:'+'"'+p_autor+'"';
	}
	else{
		author='inauthor:';
	}
	if(!(p_categoria===undefined || p_categoria==="")){
		subject='subject:'+'"'+p_categoria+'"';
	}
	else{
		subject='subject:';
	}
	var img,nombre;
	 $.ajax(
        {			         	
        	
        	url:'https://www.googleapis.com/books/v1/volumes?q='+p_autor+p_categoria+"&maxResults="+n,
            success: function(json)
            {			               	                
            	for (var item = 0; item < json.items.length; item++)
            	{
            		if(json.items[item].volumeInfo.title===undefined){
            			nombre="nombre no disponible";
            		}
            		else{
            			nombre=json.items[item].volumeInfo.title;
            		}
            		if(json.items[item].volumeInfo.imageLinks===undefined){
            			img="https://t3.ftcdn.net/jpg/02/07/87/76/160_F_207877694_pjYJjbYH1ERRAZvIt0qvho6AEnJhHvXx.jpg";
            		}
            		else{
            			img=json.items[item].volumeInfo.imageLinks.thumbnail;
            		}
            		
            		//INgrese el code de display aqui!
	            		console.log("URL:"+'https://www.googleapis.com/books/v1/volumes?q='+p_autor+p_categoria+"&maxResults="+n);
	            		console.log(nombre,json.items[item].volumeInfo.categories[0]);
            		
            	}
            			                
    		}
        })	
}
function buscarLibroArriba(tempVar1, tempVar2) 
{				
	//	Segmento de variables si procede de la primera página
	var titulo_autor = tempVar1;
	var valor_barra = tempVar2;

	//	Se obtiene la categoría
	if(titulo_autor == "" & valor_barra == "")
	{
		//	Se limpia el componente
		document.getElementById("section_libros").innerHTML="";	
		titulo_autor = document.getElementById("combobox").value;
		//	Se obtiene el valor de la barra de búsqueda
		var valor_barra = document.getElementById("barra").value;
	}						          				
	//	Se compara el contenido con vacío
	if(valor_barra.length > 0)
	{
		//	Aquí va el cancer de samuel
		var option;
			var imgUrl,desc,calificacion,nombre,autor,id,isbn,idioma,editorial,categoria,fecha;          					        
      	if(String(titulo_autor) == "Nombre")
      	{			          		
        	option="intitle:"
        }		           
        else
        {
        	option="inauthor:"
        } 		 		                       	          
        $.ajax(
        {			         	
        	//	Se realiza la consulta
        	//url:"https://www.googleapis.com/books/v1/volumes?q=php&maxResults=40",
        	//AQUI INICIA LO QUE EDITE
        	url:'https://www.googleapis.com/books/v1/volumes?q='+option+'"'+valor_barra+'"'+"&maxResults=40",
            success: function(json)
            {			               	                
            	for (var item = 0; item < json.items.length; item++)
            	{		  
            		console.log(json.items.length);    		                		
            		//	Arreglar esto SAMUEL
            		if(json.items[item].volumeInfo.title===undefined){
            			nombre="nombre no disponible";
            		}
            		else{
            			nombre=json.items[item].volumeInfo.title;
            		}
            		if(json.items[item].volumeInfo.authors===undefined){
            			autor="autor no disponible";
            		}
            		else{
            			autor=json.items[item].volumeInfo.authors[0];
            		}
            		//Verifica si la descripcion esta disponible
            		if(json.items[item].volumeInfo.description===undefined){
            			desc="No description";
            		}
            		else{
            			desc=json.items[item].volumeInfo.description;
            		}
            		if(json.items[item].volumeInfo.id===undefined){
            			id="sin id";
            		}
            		else{
            			 id=json.items[item].volumeInfo.id;
            		}
            		if(json.items[item].volumeInfo.imageLinks===undefined){
            			imgUrl="https://t3.ftcdn.net/jpg/02/07/87/76/160_F_207877694_pjYJjbYH1ERRAZvIt0qvho6AEnJhHvXx.jpg";
            		}
            		else{
            			imgUrl=json.items[item].volumeInfo.imageLinks.thumbnail;
            		}
            		if(json.items[item].volumeInfo.industryIdentifiers===undefined){
            			isbn ="";
            		}
            		else{
            			isbn=json.items[item].volumeInfo.industryIdentifiers[0].identifier;
            		}
            		if(json.items[item].volumeInfo.categories===undefined){
            			categoria="";
            		}
            		else{
            			categoria=json.items[item].volumeInfo.categories[0];
            		}
            		if(json.items[item].volumeInfo.publisher===undefined){
            			editorial="";
            		}
            		else{
            			editorial=json.items[item].volumeInfo.publisher;
            		}
            		if(json.items[item].volumeInfo.publishedDate===undefined){
            			fecha="";
            		}
            		else{
            			fecha=json.items[item].volumeInfo.publishedDate;

            		}
            		if(json.items[item].volumeInfo.language===undefined){
            			idioma="";
            		}
            		else{
            			idioma=json.items[item].volumeInfo.language;

            		}
            		if(json.items[item].volumeInfo.averageRating===undefined){
            			calificacion="0";
            		}
            		else{
            			calificacion=json.items[item].volumeInfo.averageRating;

            		}		                		
	                display_informacion(nombre,autor,calificacion,desc,imgUrl,editorial,isbn,categoria,idioma,fecha);
            	}
            	//AQUI PARE DE EDITAR WEBON			                
    		}
        })				
	}
	//	Es vacío (no se debe hacer la consulta)
	else
	{
		alert("No Sabe");
	}	
}
