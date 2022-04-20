
// Sentencia IF
let operacion = 5 + 1;

if (operacion >= 7) {
  console.log('Es true');
}else if (operacion < 7 && operacion > 2){
  console.log('Está entre 7 y 2')
}else{
  console.log('Es false')
}

// Sentencia SWITCH
switch (operacion) {
  case 0:
    console.log('El resultado es 0');
    break;
  case 6:
    console.log('El resultado es 6');
    break;
  default:
    console.log('El no es ni 0 ni 6')
}
