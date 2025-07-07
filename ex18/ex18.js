// Ejecicio contador
let contador = 0;

function nactualizarVista(){
    document.getElementById("valoecontador").textContent = 'Valor $ {contador}';
}

function incrementar  (){
  contador++;
  actualizarVista();
}

function decrementar(){
  contador--;
  actualizarVista();
}





let control = 0;
let contraseña = "santo_seña";

function varificar() {
let clave = document.getElementById("clave").value;

if (clave != contraseña || clave == "") {
  alert("contraseña incorrecta o vacía, intentalo de nuevo");
  control++;
  if (control >= 3) {
    alert(
      "Agotó el número de intentos permitidos, acceso bloqueado... contacte a soporte técnico"
    );
  }
} else {
  window.open("http://www.google.com");
}
}

