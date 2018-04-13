
  
$("#ejercicio").click(function(event){
	alert("hola");
	$("#contenedor").load('../pestañas/ejercicios.html');
});

$("#ejemplo").click(function(event){
	$("#contenedor").load('pestañas/ejemplos.html');
});
