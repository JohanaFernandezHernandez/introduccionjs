const metodoPago = "efectivo";

switch (metodoPago) {
  case "tarjeta":
    console.log(`Pagaste con tarjeta`);
    break;
  case "cheque":
    console.log(`Se validaran los fondos del cheque`);
    break;
  case "efectivo":
    console.log(`Pagaste con efectivo`);
    break;

  default:
    console.log(`Aun no has pagado`);
    break;
}
