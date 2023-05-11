// Funciones

// Declaracion de la funcion
function sumar() {
  console.log(10 + 10);
}

sumar();

// Expresion de la funcion
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

// Arrow function auto invocadas "IIFE"
(function () {
  console.log("Esto es una funcion");
})();

