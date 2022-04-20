
//Arrays
const obj = {
  unArray: new Array(10000)
};

const unArray = obj.unArray;

for(let i=0, longitud = unArray.length; i<longitud; i++) {
  obj.unArray[i] = 'Hola';
}

