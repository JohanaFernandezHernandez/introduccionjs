

const reservacion = {
    nombre: `juan`,
    apellido: `fernandez`,
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log (`El cliente ${this.nombre} reservo y el valor a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: `Nancy`,
    apellido : `Hernandez`,
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log (`El cliente ${this.nombre} reservo y el valor a pagar es de ${this.total}`);
    }

}

reservacion.informacion();
reservacion2.informacion();