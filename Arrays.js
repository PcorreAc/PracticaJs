//Arrays
const obj = {
    unArray: new Array(10000)
  }
  
  function badPerformance() {
    console.time('bad');
    for(let i=0; i<obj.unArray.length; i++) {
      obj.unArray[i] = 'Hola';
    }
    console.timeEnd('bad');
  }
  
  function goodPerformance() {
    console.time('good');  
    let unArray = obj.unArray;
      for(let i=0, longitud = unArray.length; i<longitud; i++) {
    obj.unArray[i] = 'Hola';
    }
    console.timeEnd('good');
  }
  
  badPerformance();
  goodPerformance();
  
  //Array ForEach
  const miArray = [1, 2, 3, 4];
  miArray.forEach((item, index) => {
    console.log(`El valor de la posición ${index} es: ${item}`)
  });
  
  //Objeto libro
  const libro = {
    titulo: 'Aprendiendo JavaScript',
    autor: 'Pablo Correa',
    numPaginas: 150,
    editorial: 'pablocorrea.cl',
    precio: '15.000'
  }
  
  //Object.getOwnPropertyNames transforma objeto en array y trae sus propiedades 
  //Object.getOwnPropertyDescriptor trae valor de las propiedades del objeto
  const props = Object.getOwnPropertyNames(libro);
  props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptor(libro, name).value
    console.log(`La prop ${name} contiene: ${valor}`)
  });
  
  //Obtener valores del objeto con For In
  for (let prop in libro) {
    console.log(`La prop ${prop} contiene: ${libro[prop]}`)
  }