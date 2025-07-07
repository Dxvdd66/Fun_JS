/* Las funciones matematicas en javascript utilizando la clase math Estas funciones permiten realizar operaciones dentro del codigo */

var precio = Math.round(399.53);
document.writeln('Precio Redondeado: ', precio, '<br>');
console.log('Precio Redondeado: ', precio, '<br>');

var precio = Math.round(399.42)
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var precio = Math.ceil(299.83) // Se declara la variable con valor decimal la funcion ceil la vuelve entero 
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var precio = Math.ceil(299.28) // Se declara la variable con valor decimal la funcion ceil la vuelve entero al mas cercano sin importar el decimal
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio);

var precio = Math. floor (540.93); // Se declara la variable con valor decimal la función floor la vuelve entero 
document.writeln('Precio redondeado: ', precio, '<br>');
console.log('Precio redondeado: ', precio, '<br>');

var seno = Math.sin(45); // Se calcula el seno del ángulo de 45 
document.writeln('El valor de seno de un ángulo de 45 es: ', seno, '<br>');
console.log( 'Seno de 45: ', seno, '<br>');

var coseno = Math. cos(50); // Se calcula el coseno del ángulo de 50
document.writeln('El valor de seno de un ángulo de 50 es: ', coseno, '<br>');
console.log( 'Coseno de 50: ', coseno, '<br>');

var tangente = Math. tan (68); // Se calcula la tangente del ángulo de 68 
document.writeln('El valor tangente de un ángulo de 68 es: ', tangente, '<br>');
console.log('Tangente de 68: ', tangente, '<br>');

var exponencial = Math.exp(2); // Se calcula el exponencial de 2.
document.writeln(' Exponencial de 2: ', exponencial, '<br>'); 
console.log('Exponencial de 2: ', exponencial, '<br>');

var exponente = Math.pow(4,2); // Esto se traduce como 4 elevado a la 2 (4 por 4 = 16).
document.writeln( 'Exponente de 4 elevado a la 2: ',exponente, '<br>');
console.log('Exponente de 4 elevado a la 2: ', exponente, '<br>');

var logaritmo = Math.log(10); // Halla el logaritmo de un numero dado
document.writeln('El logaritmo de 10 es ', logaritmo, '<br>');
console.log('El logaritmo de 10 es ', logaritmo, '<br>');

var absoluto = Math.abs(-10) // Calcular el valor absoluto de un numero dado
document.writeln('El valor absoluto de -10 es ', absoluto, '<br>');
console.log('El valor absoluto de -10 es ', absoluto, '<br>');

var raiz = Math.sqrt(81) // Calcular la raiz cuadrada de un numero
document.writeln('La raiz cuadrada de 81 es ', raiz, '<br>');
console.log('La raiz cuadrada de 81 es ', raiz, '<br>');

var aleatorio = Math.random();
document.writeln('El valor aleatorio o random es ', aleatorio, '<br>');
console.log('El valor aleatorio o random es ', aleatorio, '<br>');

//Formula para realizar numeros random pero con rango y conirtiendolos a entero
var numRam = Math.floor(Math.random()*(15-5+1)+5);
document.writeln('El valor aleatorio entre 5 y 15 es: ', numRam, '<br>')
console.log('El valor aleatorio entre 5 y 15 es: ', numRam, '<br>')