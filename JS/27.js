// poo

//Object Literal

const producto = {
    nombre: `tablet`,
    precio: 5600
}

//object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
}

//crear funciones que solo se utilizan en un objeto en especifico PROTOTYPES
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}


const Producto2 = new Producto(`Monitor curvo de 49"`, 800);
const Producto3 = new Producto(`tablet"`, 300);

console.log (Producto2);
console.log (Producto3);
console.log (Producto3.formatearProducto ());