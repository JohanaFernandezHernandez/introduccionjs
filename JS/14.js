// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50, 60, 70];

// console.log(numeros);
// console.log(typeof numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// console.log(typeof meses);

// console.log("Meses:", meses);

const arreglo = [
  "Hola",
  10,
  true,
  null,
  "Hola",
  //   este tipo de dato es un objeto
  {
    nombre: "Jaime",
    Apellido: "Sanchez",
  },
];

// console.log("Test:", nombre);

// console.log("Este es el arreglo completo:", arreglo[5].nombre);

// Conocer la extesión de un arreglo
// console.log("Cantidad de elementos en el arreglo:", arreglo.length);

// console.log(meses.length);

// numeros.forEach((numero) => console.log(numero));

// Primera forma de escribir funciones
// function(){
//     return
// }

// Segunda forma de escribir funciones
// ()=>{
//     return
// }

numeros[7] = 80;

numeros.push(90);
// Agregar elementos al final del arreglo
numeros.push(100);

// agregar elementos al inicio del arreglo
numeros.unshift(-10, -20, 30);

console.table(numeros);

console.log(meses);
// esta funcion elimina el ultimo elemento de un arreglo
meses.pop();
console.log(meses);
// elimina el primer elemento del arreglo
meses.shift();
console.log(meses);

// elimina un valor en espeficico el primer valor indica que indice y el segundo cuantos elementos eliminio
meses.splice(1, 1);
console.log(meses);

// Rest Pperasto o Spread Operator

const NuevoArreglo = [...meses, "Junio", ...arreglo];
console.log(NuevoArreglo);

console.log("reto2:", NuevoArreglo[8].Apellido);


