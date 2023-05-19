
const boton = document.querySelector("#boton");

boton.addEventListener ("clink", () => {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
})

if (Notificacion.permission == "granted") {
    new Notification("esta es una notificacion", {
        icon: "img/img.wedp",
        body: "codigo con Johana tutoriales"
    })
}