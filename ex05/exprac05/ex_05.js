//operadores matematicos

let a, b; //Aqui va a dar un error es normal.
let c, d; //Aqui las operaciones van a dar el resultado real
let suma, resta, mult, div, residuo, potencia; //Variables para obtener los resultados de los operadores.

 a = prompt("Ingrese un numero: ");
 b = prompt("ingrese otro numero: ");

//Resultados de las operaciones 
suma = a + b; //aqui la operacion no se da pues se concatenan los valores por el operador +
resta= a - b;
mult= a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

document.writeln(
    "la suma es: ", suma, "<br>" ,
    "la resta es: ", resta, "<br>" ,
    "la multiplicacion es: ", mult, "<br>" ,
    "la division es: ", div, "<br>" ,
    "la residuo es: ", residuo, "<br>" ,
    "la potencia es: ", potencia,
)

document.writeln("<br>"); //Salto de linea
document.writeln("<br>"); //Salto de linea

//segunda operacion
//para que las operciones numericas se pueda dar correctamente, se deben convertir los datos ingresados con parseInt o ParseFloat

c = parseInt(prompt("Ingrese un numero: "));
d = parseFloat(prompt("ingrese otro numero: "));

//resultados de las operaciones
suma = c + d;
resta= c - d;
mult= c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln(
    "la suma es: ", suma, "<br>" ,
    "la resta es: ", resta, "<br>" ,
    "la multiplicacion es: ", mult, "<br>" ,
    "la division es: ", div, "<br>" ,
    "la residuo es: ", residuo, "<br>" ,
    "la potencia es: ", potencia,
)

