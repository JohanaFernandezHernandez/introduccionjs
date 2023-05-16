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

const Producto2 = new Producto(`Monitor curvo de 49"`, 800);
const Producto3 = new Producto(`tablet"`, 300);

console.log(Producto2);
