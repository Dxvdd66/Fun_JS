/* ============== Operadores ============== */
// Operadores de asignacion

let a = 1;
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>'); //Se crea etiqueta <br> desde el javascript como elemento HTML para hacer saltos de paginacion.

a++; //El operador ++ aimenta o incrementa el valor en uno.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

a+=5; //El operador += incrementa el valor de la variable dependiendo el valor que se ponga luego del igual.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

a--; //El operador -- decrementa el valor en uno.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

a-=2; //El operador -= resta el valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

a*=2; //El operador *= multiplica el valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

a/=4; //El operador /= divide el valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

a**=3; //El operador **= eleva a la potencia dependiendo del valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln('El valor de a = ', a);
console.log('El valor de a = ', a);
document.writeln('<br>');

//Los operadores de comparacion sirven para comparar cantidades o valores entre variables.

/*
= es el operador de asignacion
> es el operador mayor que
< es el operador menos que
== es el operador igual que
!= es el operador diferente de
>= es el operador mayor o igual que
<= es el operador menor o igual que
*/

let valorUNO, valorDOS; // Se declaran las variables.
// utilidad del operadr de asignacion
valorUNO = 20; // Se inicializa con un valor de tipo entero
valorDOS = 10; // Se inicializa con un valor de tipo entero

// Operador mayor que >
document.writeln(valorUNO > valorDOS, '<br>');
console.log(valorUNO > valorDOS);
// El sistema verifica la variable uno es menor que a la dos y devolvera un resultado booleano es decir; falso o o verdadero (false or true)