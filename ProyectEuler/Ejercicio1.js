//Busca la suma de todos los multiplos de 3 0 5 bajo 1000

let suma = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
    }
}
console.log(suma);