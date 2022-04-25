//Objetos
const user = {
    name: 'Pablo',
    id: 1234
}

const userContact = {
    twitter: '@pacorreac',
    mail: 'pacorreac@gmail.com'
}

 //concatenar objetos en 1 solo
const fullUser = {...user, ...userContact} 
//Agregar y/o modificar elementos de los objetos 
const fullUser2 = {...user, nuevo: 'nueva propiedad', ...userContact, id: 12345, mail: 'pcorreac@emeal.nttdata.com'} 

console.log(fullUser)
console.log(fullUser2)

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

//Función sin spread
function suma(numero1, numero2, numero3) {
    const resultado = numero1 + numero2 + numero3;
    console.log(resultado);
}
suma(lista1[0], lista1[1], lista1[2]);
//misma función simplificado por spread operator
suma(...lista1);

//FUNCIÓN CON SPREAD
function sumaSpread(...numeros) {
    //...numeros => rest operator que permite párametros de tipo array (+1 array / +1 spread)
    const resultado = numeros.reduce((prevValue, nextValue) => 
    prevValue + nextValue, 0);
    console.log(resultado);
}

sumaSpread(...lista1, ...lista2);