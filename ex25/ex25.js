function focalizar(){
    let seleccion = document.getElementById("select");

    document.getElementById('').value = '';
    document.getElementById('').style.border = '';
    document.getElementById('').style.borderradius='8px';
}
function validarvacios(){
    if (document.getElementById('nombre').value==''){
    document.getElementById('nombre').style.border="2px solid red";
    document.getElementById('nombre').style.borderradius="8px";
    swal('debe ingresar el nombre')
}
}
