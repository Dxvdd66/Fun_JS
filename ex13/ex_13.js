// // Mostrar los numeros del 1 al 5
// // se usa cuando sabemos cuantas veces queremos repetir algo
// for (let numero = 1; numero <= 5; numero++) {
//     console.log("numero actual:", numero);
// }

// //mostrar datos de una persona
// // se usa para recorrer las propiedades de un objeto
// let persona = {
//     nombre: "carlos",
//     edad: 25,
//     ciudad: "Bogota"
// };

// for (let propiedad in persona) {
//     console.log(propiedad + ": " + persona[propiedad]);
// }

// //contar hasta 3 con un while 
// // se usa cuando no sabemos cuantas veces, pero tenemos una condicion que se evalua antes de entrar
// let contador = 1;

// while (contador <= 3) {
//     console.log("contador:", contador);
//     contador++;
// }

// // igual que while se ejecuta al menos una vez 
// // mostrar el menu hasta que el usuario elija "salir"
// let opcion = "";

// do {
//     opcion = prompt("escribe una opcion (Escribe 'salir' para terminar):");
//     console.log("elegiste:", opcion);
// } while (opcion !== "salir");

// //este se usa para recorrer valores de arreglos (no objetos)
// // recorrer una lista de frutas
// let listadefrutas = ["manzana", "banana", "uva"];

// for (let fruta of listadefrutas) {
//     console.log("fruta:", fruta);
// }

// // ciclo de numeros pares
// document.writeln('ciclo de numeros pares');

// for (let x= 2; x <= 20; x+=2) {
//     document.writeln(`valor de x = ${x}` , `<br>` );
// }


// let usuario, clave, control;

// control = 0;
// usuario = prompt("ingrese el usuario...");
// clave = prompt("ingrese su contraseña: ");

// do {
//     if(clave != 'Micontraseña'){
//         clave = prompt('Contraseña incorrecta, intentelo de nuevo...');
//         control = 0; //continuara valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema
//     } else {
//         control = 1; //control valdra uno cuando la cpntraseña ingresada sea la correcta
//     }
// } while (control != 1);
// // la contraseña ingresada es verificada por control, si vale 1 le dara accesp al sistema sino continuara pidiendola hasta que se cumpla la condicion o usted programe los intentos
// document.writeln('Acceso concedido!, Bienvenido');

//Saber cuantas vocales tiene la palabra murcielago.

let palabra = "Murcielagos"
let vocal = 0; //En esta variable vocal se van a guardar la cantidad de vocales que se encuentren en la palabra

for(let p in palabra){
    if(palabra[p]=='a' ||palabra[p]=='e' ||palabra[p]=='i' || palabra[p]=='o' ||palabra[p]=='u') //El ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas 
    {
        vocal++;
    }
}
document.writeln("cantidad de vocales: ", vocal);
