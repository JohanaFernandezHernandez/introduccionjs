async function obtenerEmpleado () {

    const archivo ="empleados.json";

    // fetch(archivo)
    // .then(resultado => resultado.json())
    // .then (datos => {
    //     // console.log(datos.empleados)

    //     const {empleados} =datos;

    //     empleados.forEach(empleado => {
    //         console.log(empleado.id);
    //         console.log(empleado.nombre);
    //         console.log(empleado.puesto);

         
            
    //     });
    // })
const resultado = await fetch(archivo);
const datos = await resultado.json();
console.log(datos)

}

obtenerEmpleado ();
