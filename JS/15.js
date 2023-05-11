// Array Metods

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

meses.forEach(function (mes) {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

const resultado3 = meses.includes("Marzo");

const resultado1 = meses.includes("Diciembre");
console.log(resultado1);

let resultado = meses.includes("Enero");
resultado = carrito.some(function (producto) {
  return producto.nombre === "Celular";
});

console.log(resultado);

// Reduce

resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

resultado = carrito.filter(function (producto) {
  return producto.precio < 400;
});

resultado = carrito.filter(function (producto) {
  return producto.nombre == "Celular";
});

console.log(resultado);
