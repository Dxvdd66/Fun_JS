/*
JSON
Un archivo .json es como una hoja de apuntes ordenada donde se guardan los datos
de manera clara para que una persona o un programa los pueda leer , entender y utilizar.

Ejemplo: Haga de cuenta que es como un cuaderno o libreta de notas donde usted escribe información importante de alguien como por ejemplo: su nombre, edad, dirección, teléfono y esta información la mantiene en el mismo formato y bien organizada para cuando usted o alguien que requiera dicha información la necesite y pueda encontrarla fácilmente.

Ejemplo técnico: Entidad Personas o Directorio de Personas

{
"nombre": "su nombre completo",
"edad": "tiene 40 años",
"direccion": "Carrera 25 # 38 - 65",
"telefono": "3107406038",
"email": "sucorreoelectronico@correo.com"
}

Ejemplo de un menu de archivo.json:

{
    "Plato":"Hamburguesa",
    "Precio":22000,
    "Ingredientes":"["pan","lechuga","carne"],
    "disponible": true
}

es un formato basado en texto para almacenar e intercambiar datos de una manera que es legible por humanos y analizable por máquina. Como resultado, JSON es relativamente fácil de aprender y de solucionar problemas. Aunque JSON tiene sus raíces en JavaScript, se ha convertido en un formato de datos muy capaz que simplifica el intercambio de datos en diversas plataformas y lenguajes de programación. 

*/

let persona = {
    "nombre": "Cristian",
    "edad": 18,
    "aprendiz": "true",
    "residencia": {
    "direccion": "calle 34A # 35-22",
    "ciudad": "Palmira",
    "departamento": "Valle del Cauca"
    },
    "telefono": "3177210091"
}

let elementoTexto = document.getElementById("nombre")

elementoTexto.textContent = persona.nombre;