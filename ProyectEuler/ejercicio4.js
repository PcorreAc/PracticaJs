//Mayor palíndromo obtenido de multiplicación de 2 numeros de 3 digitos

let maximo = 0;
for (numero1 = 100; numero1 < 1000; numero1++) {
    for (numero2 = 100; numero2 < 1000; numero2++) {
        if(esPalindromo(numero1, numero2)){
            if (numero1 * numero2 > maximo){
                maximo = numero1 * numero2;
            }
        }   
    }
}

function esPalindromo(numero1, numero2) {
    let resultado = (numero1 * numero2).toString();
    const numeroInvertido = resultado.split('').reverse().join('');
    if (resultado === numeroInvertido) {
        return resultado;
    }
}
 console.log(`El mayor palíndromo es: ${maximo}`);