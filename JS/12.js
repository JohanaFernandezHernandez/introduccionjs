//objetos
"use strict"
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

object.freeze(producto);

producto.imagen = "imagen.jpg";

console.log(producto);