let cantidadDeProductos: number = Number(
  prompt("Ingrese aquí la cantidad de productos que compró ")
);

let nombresDeProductos: string[] = new Array(cantidadDeProductos);
let cantidadDeProducto: number[] = new Array(cantidadDeProductos);
let precioUnitario: number[] = new Array(cantidadDeProductos);
let sumaTotal: number = 0;

function cargarProductos(arreglo: string[], longitud: number): void {
  let i: number;

  for (i = 0; i < longitud; i++) {
    arreglo[i] = prompt("Ingrese el nombre del " + (i + 1) + "º producto");
    console.log(arreglo[i]);
  }
}

function cargarLaCantidadProductos(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    arreglo[i] = Number(
      prompt("Ingrese la Cantidad que compro del " + (i + 1) + "º producto")
    );
  }
}
function cargarPrecioUnitarioDelProducto(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    arreglo[i] = Number(
      prompt("Ingrese el Precio del " + (i + 1) + "º producto"),
    )}
}

function mostrarProductos(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    console.log(arreglo[i]);
  }
}

function calcularCompra(
  arregloA: number[],
  arregloB: number[],
  cantidad: number
) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    sumaTotal += arregloA[i] * arregloB[i];
  }
  return sumaTotal;
}

cargarProductos(nombresDeProductos, cantidadDeProductos);
cargarLaCantidadProductos(cantidadDeProducto, cantidadDeProductos);
cargarPrecioUnitarioDelProducto(precioUnitario, cantidadDeProductos);
console.log("Usted compró los siguientes productos: ");

mostrarProductos(nombresDeProductos, cantidadDeProductos);
console.log("Las cantidades de los productos comprados respectivamente son: ");
mostrarProductos(cantidadDeProducto, cantidadDeProductos);
console.log(
  "El Precio unitario de los productos comprados respectivamente es: "
);
mostrarProductos(precioUnitario, cantidadDeProductos);
console.log(
  "El costo total de su compra es: " +
    calcularCompra(cantidadDeProducto, precioUnitario, cantidadDeProductos)
);

if (sumaTotal >= 1000 && total < 2000) {
  console.log("Con su compra, usted esta participando por un TV Led");
} else if (sumaTotal >= 2000 && total < 3000) {
  console.log("Con su compra, usted esta participando por una Moto 0Km");
} else if (sumaTotal >= 3000) {
  console.log("Con su compra, usted esta participando por un Auto 0Km");
} else {
  console.log("Usted no supera el mínimo de compra para participar del sorteo");
}

/* Perdón, hice hasta donde pude. 
Me trabé en el mommento de mostrar por consola la promo del sorteo
*/