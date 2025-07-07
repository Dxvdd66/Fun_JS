function comenzar(){
    setTimeout(cumplido, 5000)
}
function cumplido(){
    swal("¡Se agoto el tiempo!");
}

function iniciar() {
    let eligirSegundos = document.getElementById("tiempoElegido").value;
    setTimeout(finalizado, 1000 * elegirsegundos);
}

function finalizado(){
    swal("¡se ha agotado el tiempo!")
}

function cuentaregresiva() {
    let elegirsegundos = document.getElementById("tiempoCronometro").
    value;
    let contador = document.getElementById("contador");
    let textotiempo = document.getElementById("txtTiempo");
    textotiempo.style.color = "blueviolet";
    
    textotiempo.style.display = "none"; //No mostrar el texto del inicio

    if (!elegirsegundos || elegirsegundos <=0) {
        swal("por favor, ingrese un tiempo valido.");
        return;
    }

    //cambiar texto indicando que el temporizador ha iniciado
    textotiempo.style.display ="block"; //mostrar el texto
    textotiempo.textContent = "¡tiempo inicializado!";
    textotiempo.style.color = "green";

    //inicia la cuenta regresiva
    function actualizadorcontador(segundosrestantes) {
        contador.textContent = segundosrestantes;

        if(segundosrestantes > 0) {
            setTimeout(() => actualizadorcontador(segundosrestantes - 1), 1000);
        } else {
            textotiempo.textContent = "¡tiempo finalizado!";
            textotiempo.style.color = "blueviolet";
            swal("¡se ha agotado el tiempo!")

            //vaciar el campo de entrada
            document.getElementById("tiempocronometro").value = "";
        }
    }
    actualizadorcontador(elegirsegundos)
}
