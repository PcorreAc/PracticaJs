const smallestMultiple = num => {
    let res = 0;
    let i = 1;
    let found = false;
    while (found === false) {
       res += num;
       while (res % i === 0 && i <= num) {
          if (i === num) {
             found = true;
          };
          i++;
       };
       i = 1;
    };
    return res;
 };
 console.log(smallestMultiple(20));


/*  limite = 20;
 resultado = 1;
 for (dividir = 1; dividir < limite; dividir++){
    if(resultado % dividir === 0){
        console.log(resultado);
    }
 }
  */
