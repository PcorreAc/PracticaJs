//Class CORE

const libro = {
    titulo: 'Aprendiendo JavaScript',
    autor: 'Pablo Correa',
    numPaginas: 150,
    editorial: 'pablocorrea.cl',
    precio: '15.000'
  }
  
  let libro2 = Object ({
    titulo: 'Aprendiendo JavaScript',
    autor: 'Pablo Correa',
    numPaginas: 150,
    editorial: 'pablocorrea.cl',
    precio: '15.000'
  });
  
  let libro3 = {
    titulo: 'Aprendiendo JavaScript',
    autor: {
        nombre: 'Pablo Correa',
      edad: 26,
      redes: {
        instagram: 'instagram.cl/pabloc',
        linkedin: 'linkedin.cl/pabloc'
      }
    },
    numPaginas: 150,
    editorial: 'pablocorrea.cl',
    precio: '15.000'
  }
  
  //Formas de acceder al valor 
  libro3.autor.redes.instagram
  libro3['autor']['redes']['instagram']
  
  const auto1 = { marca: 'Tesla', modelo: 'X' }
  const auto2 = { marca: 'Tesla', modelo: 'X' }
  
  auto1 === auto2
  auto1.marca === auto2.marca
  
  auto3 = auto1
  auto3 === auto1
  