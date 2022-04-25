//Suma de todos los primos desde el 2 hasta 2M

function EsPrimo(numero) {
    for (var divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) {
            return false
        }
    }
    return true;
}

let sumaPrimos = 0;
let primos = [];
for (let limite = 2; limite < 100; limite++) {
    if (EsPrimo(limite)) {
         primos.push(limite);
         sumaPrimos += limite;
    }
}
console.log(`Los numeros primos son: ${primos}`)
console.log(`Suma de los primos: ${sumaPrimos}`)