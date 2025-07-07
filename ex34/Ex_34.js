/*Promesas Solicitudes y Respuestas

Teoría

Peticiones:

GET. Se utiliza para obtener información de un servidor.  
POST. Se utiliza para enviar información al servidor.  
PUT. Se utiliza para actualizar un recurso en un servidor.  
DELETE. Se utiliza para eliminar un recurso que se encuentra en un servidor.

Respuesta:

Las respuestas a estas peticiones y/o solicitudes http van a traer consigo un código de estado http.  
Estos códigos son números que indican cuál ha sido el resultado de las solicitudes y los códigos más comunes que se pueden recibir son:

El código 200 para indicar que la respuesta fue completada exitosamente.  
El código 201 que indica cuando un elemento se ha creado en caso de que se haya solicitado eso.  
El código 204 que significa que la respuesta ha venido sin contenido.  
El código 400 que quiere decir que es una solicitud incorrecta.  
El código 401 que significa que la solicitud no fue autorizada por el servidor al que se la está pidiendo.

200 Respuesta completada  
201 Elemento creado  
204 Respuesta vacía  
400 Mal solicitado  
401 No autorizado

*/

// let datosJson;
let datosJson;
fetch('/ex32/libros.json')
.then(res => res.json())
.then((salida) => {
    const contenedor = document.getElementById('contenedor');
    salida.biblioteca.forEach((libro, index) => {
    const divLibro = document.createElement('div');
    divLibro.innerHTML = `
        <h3>Libro ${index + 1}</h3>
        <p><strong>Título:</strong> ${libro.titulo || 'No definido'}</p>
        <p><strong>Editorial:</strong> ${libro.editorial || 'No definido'}</p>
        <p><strong>Edición:</strong> ${libro.edicion || 'No definido'}</p>
        <p><strong>ISBN:</strong> ${libro.isbn || 'No definido'}</p>
        <p><strong>AUTOR principal:</strong> ${libro.autores["autor principal"] || 'No definido'}</p>
        <p><strong>Código SENA:</strong> ${(libro["codigo sena"] || '').join ? libro["codigo sena"].join(", ") : libro["codigo sena"] || 'No definido'}</p>
        <p><strong>Descripción:</strong> ${libro.descripcion || 'No definida'}</p>
        <hr>`;
    contenedor.appendChild(divLibro);
    });
}).catch(error => alert("Error: " + error));
