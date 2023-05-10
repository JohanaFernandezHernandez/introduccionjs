//objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}


// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

//otra opcion no tan comun

//Para Agregar

producto.imagen = "imagen.jpg";

//Para Eliminar

delete producto.disponible;

console.log(producto);