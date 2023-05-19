const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve(` Usuario autenticado`);
  } else {
    reject(`No se puede iniciar secion`);
  }
});
usuarioAutenticado
.then (resultado => console.log(resultado))
.then (error => console.log(error))