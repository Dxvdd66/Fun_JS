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
