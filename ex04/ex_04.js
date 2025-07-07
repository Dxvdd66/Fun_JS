//Pedir datos a un usuario (Como ejercicio pues cuando se piden datos se utiliza inputs)

let nombre, edad, direccion, movil, email; //Se pueden crear tantas variables como se necesitan como una declaracion let.

// Prompt es una palabra reservada qe despliega una funcion y sale un mensaje de tipo alert para pedir datos

nombre = prompt('Escriba su nombre: '); //se piden los datos al usuario
document.writeln("su nombre es: ", nombre, "<br>"); //se imprimen los datos proporcionados por el usuario

edad = prompt("Digite Su edad: "); //se piden los datos al usuario
document.writeln("su Edad es: ", edad, "<br>"); //se imprimen los datos proporcionados por el usuario

direccion = prompt("Escriba Su direccion: "); //se piden los datos al usuario
document.writeln("su direccion es: ", direccion, "<br>"); //se imprimen los datos proporcionados por el usuario

movil = prompt("Digite su movil: "); //se piden los datos al usuario
document.writeln("su movil es: ", movil, "<br>"); //se imprimen los datos proporcionados por el usuario

email = prompt("escriba su email es: "); //se piden los datos al usuario
document.writeln("su email es: ", email, "<br>"); //se imprimen los datos proporcionados por el usuario

//con la etiqueta <br> se pueden realizar saltos de pagina

console.log("su nombre es: ", nombre, "<br>");
console.log("su Edad es: ", edad, "<br>");
console.log("su direccion es: ", direccion, "<br>"); 
console.log("su movil es: ", movil, "<br>");
console.log("su email es: ", email, "<br>");

