function pestaña(){
    let pestan = open();
    pestan.document.writeln("se abrio como nueva pestaña");
}

function ventana(){
    let ventana = open("", "", "width=400, height=250");
    ventana.document.writeln("se abrio como una nueva pestaña")
}

function salir() {
    let respuesta = confirm("¿desea salir del sitio?");
    if(respuesta == true){
        window.close();
    }
}

//Explicacion 
/* 
let ventana = open("", "", "width=400, height=250");

en este caso las comillas vacias indican que no se carga una URL 
especifica, ademas, que debe desanclarse del navegador actual y crear
una nueva ventana con las dimensiones especificas
*/

function redireccionar(){
    if(window.confirm("¿desea salir de la pagina actual?")){
        window.location = "https://github.com/"
    }
}

//conteo y disponibilidad de caracteres

document.getElementById("Texto").addEventListener("keyup", caracteres);

function caracteres(){
    let cant = document.getElementById("texto").value.length;
    let disponible = 20 - parseInt(cant);

    document.getElementById("cantidad").innerHTML = disponible;
    if(disponible==0){
        swal("¡cantidad de cacteres agotados!");
    }
}