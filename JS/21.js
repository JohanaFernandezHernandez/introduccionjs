// Arrow Fuctions
const sumar2 = (n1,n2) => console.log(n1 + n2);

  sumar2(3,6);

  const aprendiendo = tecnologia => console.log (`Aprendiendo ${tecnologia}`)

  aprendiendo("javaScripr")

  
//ejercicio 2
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  {
    nombre: "Monitor 20 Pulgadas",
    precio: 500,
  },
  {
    nombre: "Monitor 50 Pulgadas",
    precio: 700,
  },
  {
    nombre: "Tablet",
    precio: 300,
  },
  {
    nombre: "Audifonos",
    precio: 200,
  },
  {
    nombre: "Teclado",
    precio: 50,
  },
  {
    nombre: "Celular",
    precio: 500,
  },
  {
    nombre: "Bocinas",
    precio: 300,
  },
  {
    nombre: "Lapton",
    precio: 800,
  },
];

// ForEach

meses.forEach( mes => {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});



// Reduce

resultado = carrito.reduce( (total, producto) => total + producto.precio,0);

resultado = carrito.filter(producto => producto.precio < 400);

resultado = carrito.filter( producto => producto.nombre !== "Celular");

console.log(resultado);
