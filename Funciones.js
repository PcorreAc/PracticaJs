// Funciones 
function saludar(nombre = 'Pepe') {
    return `Hola ${nombre}`
  }
  
  saludar()
  saludar('Pablo')
  
  class Inventario {
    constructor(nombre) {
      this.nombre = nombre;
      this.articulos = [];
    }
    getNombre() {
      return this.nombre;
    }
    add(articulo, cantidad) {
      this.articulos[articulo] = cantidad;
    }
    cantidad(articulo) {
      return this.articulos[articulo];
    }
  }
  
  /*
  function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = [];
  }
  Inventario.prototype.getNombre = function() {
    return this.nombre;
  } 
  Inventario.prototype.add = function(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
  }
  Inventario.prototype.cantidad = function(articulo) {
    return this.articulos[articulo]
  }
  */
  
  let libros = new Inventario('libros');
  libros.getNombre()
  libros.add('Aprendiendo JavaScript', 5);
  libros.cantidad('Aprendiendo JavaScript');