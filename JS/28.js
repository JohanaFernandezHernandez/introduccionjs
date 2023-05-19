//Classes

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
  }

  retorneprecio() {
    return `El Precio es $ ${precio}`;
  }
}

//Herencia

class Libro extends Producto{
  constructor(nombre, precio,isbn) {
    super (nombre, precio, );
    this.isbn =isbn;
  }

  formatearProducto() {
    return `${super.formatearProducto()} y su ISBN ES ${this.isbn}`;
  }
}

const libro = new Libro (`javaScript la revolucion`, 120 , `626847621`);
console.log(libro.formatearProducto());


const Producto2 = new Producto(`Monitor curvo de 49"`, 800);
const Producto3 = new Producto(`tablet"`, 300);

console.log(Producto2.formatearProducto());
