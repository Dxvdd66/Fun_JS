/*
================================================================================
                  EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT
                              CAPÍTULO 1
================================================================================

INSTRUCCIONES:
- Lea cuidadosamente cada ejercicio
- Complete el código donde se indique con "// TU CÓDIGO AQUÍ"
- Cada ejercicio tiene un valor de puntos específico
- Total del examen: 120 puntos
- Tiempo estimado: 90 minutos

================================================================================
*/

console.log("=== INICIANDO EXAMEN DE JAVASCRIPT - CAPÍTULO 1 ===");
document.writeln("<h1>EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT</h1>");
document.writeln("<h2>Capítulo 1: Introducción a JavaScript</h2>");
document.writeln("<hr>");

// ================================================================================
// EJERCICIO 1: VARIABLES Y TIPOS DE DATOS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 1: Variables y Tipos de Datos (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Declare las siguientes variables con los tipos de datos apropiados:
   - nombre (string): Su nombre completo
   - edad (number): Su edad
   - altura (number): Su altura en metros (con decimales)
   - esEstudiante (boolean): true si es estudiante, false si no
   - hobbies (array): Un array con 3 de sus pasatiempos favoritos
   - direccion (object): Un objeto con propiedades: calle, ciudad, pais

2. Muestre en consola el tipo de dato de cada variable usando typeof
3. Muestre en pantalla toda la información usando document.writeln
*/

// TU CÓDIGO AQUÍ
let nombre = "Didier Alexander";
let edad=21;
let altura = 1.75;
let esEstudiante = true;
let hobbies = ["leer", "programar", "andar en bicicleta"];
let direccion = {
calle: "Calle 123",
ciudad: "California",
pais: "U S A"
};
// Declare las variables solicitadas:

// Muestre el tipo de dato de cada variable:
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof esEstudiante);
console.log(typeof hobbies);
console.log(typeof direccion);

// Muestre la información en pantalla:
document.writeln("Nombre:", nombre );
document.writeln("Edad:", edad );
document.writeln("Altura:", altura );
document.writeln("¿Es estudiante?:", esEstudiante);
document.writeln("Hobbies:", hobbies.join(", ") );
document.writeln("Dirección:", direccion.calle + direccion.ciudad + direccion.pais);

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 2: OPERADORES MATEMÁTICOS Y CONVERSIÓN (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 2: Operadores Matemáticos y Conversión (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario dos números usando prompt()
2. Convierta los valores a números usando parseInt() y parseFloat()
3. Realice las siguientes operaciones:
   - Suma
   - Resta
   - Multiplicación
   - División
   - Módulo (residuo)
   - Potencia
4. Muestre los resultados en pantalla
5. Calcule el promedio de los dos números y redondee el resultado
*/

// TU CÓDIGO AQUÍ
// 1. Declarar variables
let nu1 = prompt("Ingrese el primer número:");
let nu2 = prompt("Ingrese el segundo número:");

// 2. Mostrar tipos de datos
let numEn1 = parseInt(nu1);
let numDe2 = parseFloat(nu2);


let suma = numEn1 + numDe2;
let resta = numEn1 - numDe2;
let multiplicacion = numEn1 * numDe2;
let division = numEn1 / numDe2;
let modulo = numEn1 % numDe2;
let potencia = numEn1 ** numDe2;



console.log("Suma: ", suma,  );
console.log("Resta: ", resta, );
console.log("Multiplicación: ", multiplicacion, );
console.log("División: ", division, );
console.log("Módulo: ", modulo, );
console.log("Potencia: ", potencia,);

// Calcule el promedio y redondee:
let promedio = Math.round((numEn1 + numDe2) / 2);
console.log("potencia", potencia)

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 3: OPERADORES DE COMPARACIÓN Y LÓGICOS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 3: Operadores de Comparación y Lógicos (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario su edad y si tiene licencia de conducir (sí/no)
2. Convierta la respuesta de licencia a boolean
3. Evalúe las siguientes condiciones:
   - Si es mayor de 18 años Y tiene licencia → "Puede conducir"
   - Si es mayor de 18 años PERO no tiene licencia → "Necesita obtener licencia"
   - Si es menor de 18 años → "No puede conducir aún"
4. Use operadores lógicos (&&, ||) para las evaluaciones
5. Muestre el resultado en pantalla
*/

// TU CÓDIGO AQUÍ
// 1. Declaración de variables con los tipos de datos apropiados
let Edad = prompt("¿Cuál es tu edad?");
edad = parseInt(edad);

let tieneLicencia = prompt("¿Tienes licencia de conducir? (sí/no)");
let licencia = (tieneLicencia === "sí" || tieneLicencia === "si");

// 2. Mostrar en consola el tipo de dato de cada variable usando typeof
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de licencia:", typeof licencia);


// 3. Mostrar en pantalla toda la información usando document.writeln

document.writeln("Edad: ", edad,);
document.writeln("¿Tiene licencia?: ", (licencia, "Sí" , "No"));

// Solicite la información al usuario:
if (edad >= 18 && licencia) {
   document.writeln("Resultado: Puede conducir");
} else if (edad >= 18 && !licencia) {
   document.writeln("Resultado: Necesita obtener licencia");
} else {
   document.writeln("Resultado: No puede conducir aún");
}

// Convierta y evalúe las condiciones:

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 4: FUNCIONES MATEMÁTICAS Y STRINGS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 4: Funciones Matemáticas y Strings (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree una función llamada calcularAreaCirculo que reciba el radio como parámetro
2. La función debe calcular el área usando Math.PI y Math.pow()
3. Redondee el resultado a 2 decimales usando Math.round()
4. Cree una función llamada formatearNombre que reciba nombre y apellido
5. La función debe convertir el nombre a mayúsculas y el apellido a minúsculas
6. Concatene ambos usando el método concat()
7. Pruebe las funciones con valores de ejemplo
*/

// Función para calcular área del círculo:
function calcularAreaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    // Redondear a 2 decimales
    return Math.round(area * 100) / 100;
}

// Función para formatear nombre:
function formatearNombre(nombre, apellido) {
   let nombreMayus = nombre.toUpperCase();
   let apellidoMinus = apellido.toLowerCase();
   return nombreMayus.concat(" ", apellidoMinus);
}

// Pruebe las funciones:
let areaEjemplo = calcularAreaCirculo(5);
console.log("Área del círculo:", areaEjemplo); 

let nombreFormateado = formatearNombre("Carlos", "perez");
console.log("Nombre formateado:", nombreFormateado); 


document.writeln("<hr>");

// ================================================================================
// EJERCICIO 5: ESTRUCTURAS DE CONTROL (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 5: Estructuras de Control (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario un número del 1 al 7
2. Use switch-case para mostrar el día de la semana correspondiente:
   - 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
   - 5 = Viernes, 6 = Sábado, 7 = Domingo
   - Cualquier otro valor = "Día inválido"
3. Solicite al usuario su calificación (0-100)
4. Use if-else if-else para determinar la nota:
   - 90-100 = A, 80-89 = B, 70-79 = C, 60-69 = D, 0-59 = F
5. Muestre ambos resultados en pantalla
*/

// Solicita al usuario un número del 1 al 7
let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7 para saber el día de la semana"));

// Variable para guardar el día correspondiente
let diaSemana = "";

// Switch para días de la semana
switch (numeroDia) {
   case 1:
      diaSemana = "Lunes";
      break;
   case 2:
      diaSemana = "Martes";
      break;
   case 3:
      diaSemana = "Miércoles";
      break;
   case 4:
      diaSemana = "Jueves";
      break;
   case 5:
      diaSemana = "Viernes";
      break;
   case 6:
      diaSemana = "Sábado";
      break;
   case 7:
      diaSemana = "Domingo";
      break;
   default:
   diaSemana = "Día inválido";
}
// Solicita al usuario un número del 1 al 7
let numerDia = parseInt(prompt("Ingrese un número del 1 al 7 para saber el día de la semana"));

// Variable para guardar el día correspondiente
let diSemana = "";

// Solicita la calificación
let calificacion = parseInt(prompt("Ingrese su calificación (0-100)"));

// Variable para guardar la nota
let nota = "";

// If-else para calificaciones
if (calificacion >= 90 && calificacion <= 100) {
   nota = "A";
} else if (calificacion >= 80) {
   nota = "B";
} else if (calificacion >= 70) {
   nota = "C";
} else if (calificacion >= 60) {
   nota = "D";
} else if (calificacion >= 0) {
   nota = "F";
} else {
   nota = "Calificación inválida";
}

// Mostrar resultados
console.log("Día de la semana:", diaSemana);
console.log("Nota obtenida:", nota);





document.writeln("<hr>");

// ================================================================================
// EJERCICIO 6: CICLOS Y ARRAYS (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 6: Ciclos y Arrays (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree un array con 5 números aleatorios entre 1 y 100
2. Use un ciclo for para mostrar todos los números del array
3. Calcule la suma de todos los números del array
4. Encuentre el número mayor y el menor del array
5. Use un ciclo while para contar cuántos números son pares
6. Muestre todos los resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Cree el array con números aleatorios:

// Muestre todos los números:

// Calcule la suma:

// Encuentre mayor y menor:

// Cuente números pares:

document.writeln("<hr>");

// ================================================================================
// BONUS: PROGRAMACIÓN ORIENTADA A OBJETOS (10 puntos extra)
// ================================================================================
document.writeln("<h3>BONUS: Programación Orientada a Objetos (10 puntos extra)</h3>");

/*
INSTRUCCIONES:
1. Cree una clase llamada Estudiante con las siguientes propiedades:
   - nombre, edad, carrera, promedio
2. Agregue un método llamado mostrarInfo() que muestre toda la información
3. Agregue un método llamado calcularEstado() que retorne:
   - "Excelente" si promedio >= 4.5
   - "Bueno" si promedio >= 3.5
   - "Regular" si promedio >= 3.0
   - "Necesita mejorar" si promedio < 3.0
4. Cree una instancia de la clase y pruebe los métodos
*/

// TU CÓDIGO AQUÍ
// Defina la clase Estudiante:

// Cree una instancia y pruebe los métodos:

document.writeln("<hr>");
document.writeln("<h2>¡FIN DEL EXAMEN!</h2>");
document.writeln("<p>Revisa la consola para ver todos los resultados.</p>");

console.log("=== EXAMEN COMPLETADO ==="); 










