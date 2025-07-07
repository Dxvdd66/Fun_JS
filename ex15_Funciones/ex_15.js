// //Funciones que reciben parametros

// function saludo(){
//     document.writeln("Hola mundo", "<br>");
//     console.log("Hola Mundo");
// }
// saludo();

// function despedida(){
//     document.writeln("Adios mundo", "<br>");
//     console.log("Chao Mundo");
// }
// despedida();

// function saludarusuario(nombreusuario, apellidousuario){
//     document.writeln("Holaaa ", nombreusuario, " ", apellidousuario, " Bienvenido(a)")
// }
// let nombreusuario = prompt("Dime tu nombre")
// let apellidousuario = prompt("Dime tu apellido")

// saludarusuario(nombreusuario, apellidousuario);




// function saludarPaciente(nombrepaciente, apellidopaciente){
//     document.writeln("Holaaa ", nombrepaciente, " ", apellidopaciente, " Bienvenido(a)")
// }
// let recepcionanombrepaciente = prompt("Dime tu nombre")
// let recepcionapellidopaciente = prompt("Dime tu apellido")

// saludarPaciente(recepcionanombrepaciente, recepcionapellidopaciente);

//Funcionescon calculos simples

// function calcularAreaRectangulo(base, altura){
//     let area = base * altura;
//     return area;
// }
// console.log("El area del rectangulo es: ", area = calcularAreaRectangulo(5, 10));


// function esMayor_o_esMenor(edad){
//     if (edad >= 18) {
//         console.log("es mayor de edad")
//     } else {
//         console.log("es menor de edad")
//     }
// }
// esMayor_o_esMenor(20);
// esMayor_o_esMenor(12);

// function suma (){
//     let a = parseInt(prompt("ingrese el 1er numero a sumar:"));
//     let b = parseInt(prompt("ingrese el 2er numero a sumar:"));
//     return a + b; //Devuelve la suma con los numeros ingresados por el usuario
// }
// document.writeln("El resultado de la suma es: ", suma(), "<br>");


function verColor(){
    valor = parseInt(prompt("Por favor ingrese numeros entre 1 y 3 para activar el semaforo..."));

    switch(valor){
        case 1:
            return "Perfecto has ingresado el color: Rojo";
        case 2:
            return "Perfecto has ingresado el color: verde";
        case 3:
            return "Perfecto has ingresado el color: Amarillo";
            default: 
            return "No ha ingresado un valor o numero correcto en la instruccion dada"
    }
}
document.writeln(verColor());
