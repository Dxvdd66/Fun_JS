/* CONDICIONALES

Funcionalidades que permiten mejorar la toma de decisiones en la ejecucion del codigo, Estas decisiones se basan en evaluar si una o mas condiciones son verdaderas o falsas, es decir, si se cumple algo en ciertas situaciones, parametros o condiciones perfectas.

Ahora bien se puede verificar si se cumple una condicion determinada tiene resultado especifico, el programa se ejecutara dentro de las instrucciones dadas.

*/

// condicional if() else{}

let nombre, edad;
nombre = prompt('ingresa tu nombre: ');
edad = prompt('ingresa tu edad: ');
edad = parseInt(edad);

if (edad >= 18 ) {
    document.writeln('Tu eres mayor de edad');
    console.log('edad digitada ', edad, 'Mayor de edad')
} else {
    document.writeln('Tu eres menor de edad');
    console.log('edad digitada ', edad, 'Menor de edad')
}
