//Busca factores primos
function esPrimo(numero) {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) { 
        return false;
      }
    }
    return true;
  }
  
  function obtenerFactorPrimo(numero) {
    numero = 10;
      let primos = [];
      for (let i = 2; i <= numero; i++){
        while(esPrimo(i) && numero % i === 0){
          if (!primos.includes(i)) {
            primos.push(i);
          }
          numero /= i;
        }
      }
      return primos;
    }
  
  console.log(obtenerFactorPrimo(600851475143))