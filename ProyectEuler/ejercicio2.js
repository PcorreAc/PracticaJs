// Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones, encuentre la suma de los términos de valor par.
let array = [1, 2]
let suma = 2
//Es el valor de la suma anterior X2
for (index = 2; array[index - 2] + array[index - 1] < 4000000; index++) {
  array[index] = array[index - 2] + array[index - 1]
  if(array[index] % 2 === 0){
    suma = suma + array[index]
  }
}
