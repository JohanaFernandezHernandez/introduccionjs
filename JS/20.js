//Metodos de propiedad

const reproductor ={
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },

    pausar : function() {
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre){
        console.log(`Creando PlayList: ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendoo PlayList: ${nombre}`)
    }
}

reproductor.borrarCancion =function(id) {
    console.log(`Eliminando la cancion: ${id}`)

}
;
reproductor.reproducir(25)
reproductor.pausar();
reproductor.borrarCancion(15);
reproductor.crearPlaylist(`salsa`)
reproductor.reproducirPlaylist(`salsa`)