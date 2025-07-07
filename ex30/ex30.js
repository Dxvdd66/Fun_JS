for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Declara la variable i que empieza con 1 esta variable 
//es un contador que se ejecutara hasta que i sea igual a 5
//el i++ es la que incrementara de 1 
//el console.log es la que imprimira el resultado


//imprimir los numeros del 1 a 5
let i = 1;
while (i <= 5) {
console.log(i);
i++;
}
//el while es la condicion del bucle si i < 5 se ejecutara hasta tal.

function saludar() {
    console.log("¡Hola!");
}

function sumar(a, b) {
    return a + b;
}
// La función retorna la suma de a y b, si se asigna un numero como valor de cada letra.


// Función tradicional
function doble(x) {
    return x * 2;
}
//es una función tradicional en JavaScript que toma un parámetro x y devuelve el doble de su valor:

const saludar = () => {
    console.log("Hola");
};

const doble = x => x * 2;
//las dos funcionan igual

class Persona {
    constructor(nombre, edad) {
this.nombre = nombre;
this.edad = edad;
    }

    saludar() {
console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Persona {
    constructor(nombre) {
    this.nombre = nombre;
    }

    // Método definido dentro de la clase
    saludar() {
    console.log(`Hola, soy ${this.nombre}`);
    }
}

class Persona {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    mostrarDatos() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

