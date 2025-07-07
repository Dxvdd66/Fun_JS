async function sumar(num1, num2, num3) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 !== 'number' || typeof num2 !== 'number'  || typeof num3 !== 'number') {
                reject(new Error('Alguno de los argumentos no es un número'));
            } else {
                resolve(num1 + num2 + num3);
            }
        }, 2000);
    });
}

async function manejoErrores() {
    try {
        let resultado = await sumar(7, 20, 40);
        console.log('Resultado:', resultado);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

manejoErrores();

